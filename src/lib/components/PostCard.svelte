<script lang="ts">
	import type { Post } from '$lib/types';
	import { formatDate } from '$lib/utils';
	import Category from './Category.svelte';

	export let post: Post;
</script>

<article class="group clickable p-3">
	<div class="group relative">
		<h3 class="font-semibold text-gray-900 group-hover:text-stone-100">
			<a href="/posts/{post.slug}">
				<span class="absolute inset-0"></span>
				{post.title}
			</a>
		</h3>
		<div class="flex flex-col items-start gap-1 text-xs w-full">
			<time datetime="{post.date}" class="text-gray-500 group-hover:text-stone-400 min-w-fit"
				>{formatDate(post.date)}</time
			>
			<div class="flex gap-1 text-xs w-full">
				{#each post.categories as category, i}
					{#if i < 2}
						<Category category={category} />
					{:else if i === 2}
						<Category category="..." clickable={false} />
					{/if}
				{/each}
			</div>
		</div>
		<p class="mt-5 line-clamp-3 text-sm/6 text-gray-600 group-hover:text-stone-300">
			{post.description}
		</p>
	</div>
</article>
