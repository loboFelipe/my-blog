<script lang="ts">
	import { page } from "$app/state";

  const searchParams = $derived(page.url.searchParams);
  
  let { category, clickable = true } = $props();
</script>

<a
  href={searchParams.get('category') || !clickable ? `/posts` : `/posts?category=${category}`}
  class="relative z-10 px-2 py-1 font-medium text-gray-600 bg-stone-800/10 group-hover:text-stone-300 group-hover:bg-stone-100/10"
  >{category}</a
>