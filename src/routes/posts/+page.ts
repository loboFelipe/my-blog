import type { Post } from '$lib/types.js';

export async function load({ fetch, url }) {
	const res = await fetch(`/api/posts?${url.searchParams.toString()}`);
	const posts: Post[] = await res.json();
	return { posts };
}
