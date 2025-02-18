<script>
	import HeroDescription from '$lib/components/HeroDescription.svelte';
	import HeroIntroduction from '$lib/components/HeroIntroduction.svelte';
	import PostCard from '$lib/components/PostCard.svelte';
	import { Beaker } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Recursive Brewery</title>
	<meta property="og:type" content="blog" />
	<meta property="og:title" content="Recursive Brewery" />
	<meta property="og:description" content="" />
	<meta name="description" content="" />
</svelte:head>

<div class="py-24 sm:py-32">
	<div
		class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10"
	>
		<div
			class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
		>
			<div class="lg:pr-4">
				
			</div>
		</div>
		<div
			class="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
		>
			<div class="w-full grid grid-cols-1 gap-x-8 gap-y-6">
				<!-- <h3 class="font-semibold leading-7 flex mt-4"><Beaker /> Fresh from the brewery:</h3> -->
			</div>
		</div>
	</div>
</div>
