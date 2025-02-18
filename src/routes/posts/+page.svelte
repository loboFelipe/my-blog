<script lang="ts">
  import PostCard from '$lib/components/PostCard.svelte';
  import { page } from '$app/state';
  import Category from '$lib/components/Category.svelte';
  import { ScanSearch, Frown } from 'lucide-svelte';

	const data = $derived(page.data);

  const posts = $derived(data.posts);
  const searchParams = $derived(page.url.searchParams);
	let searchQuery = $state('');

  let filteredPosts = $derived.by(() => {
		if (!searchQuery)
			return posts;
		return posts.filter((post) => {
        const title = post.title.toLowerCase();
        const description = post.description.toLowerCase();
        return title.includes(searchQuery) || description.includes(searchQuery);
      });
	});
</script>

<svelte:head>
  <title>Recursive Brewery - Posts</title>
  <meta property="og:type" content="blog" />
  <meta property="og:title" content="Recursive Brewery - Posts" />
  <meta property="og:description" content="" />
  <meta name="description" content="" />
</svelte:head>

<div class="py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-0 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:mx-0">
      <h2 class="text-4xl font-semibold text-pretty text-gray-900 sm:text-5xl">From the blog</h2>
      <p class="mt-2 text-sm text-gray-600">
        Get the inside scoop on what's new at Recursive Brewery. Our blog is your source for news, updates, and stories about our beers, our people, and our community.
      </p>
      {#if searchParams.get('category') && searchParams.get('category') !== null}
        <h5 class="font-semibold text-pretty text-gray-900">Filter:</h5>
        <Category category={searchParams.get('category')} />
      {/if}
    </div>

    <div class="relative">
      <input
        class="outline-none flex max-w-xl flex-col items-start justify-between border-3 border-base-theme shadow-base-theme bg-beige-500 w-full mt-8 px-2 py-1 text-sm pl-8"
        oninput={(event) => {
					searchQuery = (event.target as HTMLInputElement).value.toLowerCase();
				}}
      />
      <div class="absolute left-2 top-1/2 transform -translate-y-1/2">
        <ScanSearch />
      </div>
    </div>

    <div
      class="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-12 border-t border-gray-200 pt-10 sm:mt-8 sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
    >
			{#if filteredPosts.length === 0}
			<div class="w-full flex flex-col gap-2 items-start justify-center text-lg">
				<Frown />
				<p>No posts found</p>
			</div>
			{/if}
      {#each filteredPosts as post}
        <PostCard {post} />
      {/each}
    </div>
  </div>
</div>