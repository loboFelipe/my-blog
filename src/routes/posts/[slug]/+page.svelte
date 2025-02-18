<script lang="ts">
	import Category from '$lib/components/Category.svelte';
	import { formatDate } from '$lib/utils.js';

	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={data.meta.description} />
	<meta name="description" content={data.meta.description} />
</svelte:head>

<main class="pt-8 pb-16 lg:pt-16 lg:pb-24 antialiased">
	<div class="flex justify-between px-0 sm:px-4 mx-auto max-w-screen-xl">
		<article
			class="mx-auto w-full max-w-4xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert"
		>
			<hgroup class="mb-6 lg:mb-10 not-format">
				<img src="{data.meta.thumbnail}" alt="thumbnail" class="w-full h-96 object-cover grayscale-85 object-center">
				<header>
					<h1 class="leading-tight text-gray-900 dark:text-white">{data.meta.title}</h1>
				</header>
				<small>Published at {formatDate(data.meta.date)}</small>
				<div class="flex items-center gap-x-1 text-xs">
					{#each data.meta.categories as category}
						<Category category={category} />
					{/each}
				</div>
				<hr class="my-6 text-stone-400">
			</hgroup>

			<div class="prose">
				<svelte:component this={data.content} />
			</div>
		</article>
	</div>
</main>
