import type { Post } from '$lib/types';

function getMetadata<T>(path: string, file: object): T | null {
	if (!file || typeof file !== 'object' || !('metadata' in file)) return null;
	return file.metadata as T;
}

function createEntity<T, K>(metadata: T, key: K): T & { [P in keyof K]: K[P] } {
	return { ...metadata, ...key } as T & { [P in keyof K]: K[P] };
}

function isTruthy<T>(value: T): boolean {
	return Boolean(value);
}

function sortByDateDesc<T>(items: T[], dateKey: keyof T): T[] {
  return items.sort(
    (first, second) => new Date(second[dateKey] as string).getTime() - new Date(first[dateKey] as string).getTime()
  );
}

async function getPosts(): Promise<Post[]> {
	const paths = import.meta.glob(`/src/posts/*.md`, { eager: true });
	const posts: Post[] = [];

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').pop()?.replace('.md', '');
		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = getMetadata<Omit<Post, 'slug'>>(path, file);
			if (metadata && slug) {
				const post = createEntity(metadata, { slug });
				if (isTruthy(post.published)) {
					posts.push(post);
				}
			}
		}
	}

	return sortByDateDesc(posts, 'date');
}

export async function GET({ url }) {
	const searchParams = url.searchParams;
	let posts = await getPosts();

	if (searchParams.has('category')) {
    const category = searchParams.get('category');
		if (!category) return new Response(JSON.stringify([]));
    posts = posts.filter(post => post.categories.includes(category));
  }

	return new Response(JSON.stringify(posts));
}
