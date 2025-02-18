<script>
	let { children } = $props();
	import '../lib/app.css';

	import { page } from '$app/state';
	import HeroSvgPanel from '$lib/components/HeroSvgPanel.svelte';
	import { Coffee } from 'lucide-svelte';
	import TransitionSvelte from '$lib/components/TransitionSvelte.svelte';

	let currentPage = $derived(page.url.pathname);
</script>

<div class="relative isolate overflow-hidden pt-2 px-4 sm:px-0">
	<HeroSvgPanel />
	<nav class="">
		<div class="mx-auto max-w-7xl px-0 sm:px-6 lg:px-8">
			<div class="relative flex items-center justify-between pt-1">
				<div class="flex flex-1 items-stretch justify-start">
					<a href="/" class="flex shrink-0 items-center">
						<span class="text-3xl pt-1"><Coffee /></span>
					</a>
					<div class="ml-6 block">
						<div class="flex space-x-3">
							<div class="group {currentPage === '/' ? 'clickable-active' : 'clickable'}">
								<a
									href="/"
									aria-current="page"
									class="px-4 py-1 text-base group-hover:text-active-theme"
								>
									Home
								</a>
							</div>
							<div
								class="group {currentPage?.includes('/posts') ? 'clickable-active' : 'clickable'}"
								>
								<a
								href="/posts"
								aria-current="page"
								class="px-4 py-1 text-base group-hover:text-active-theme"
								>
								Posts
							</a>
						</div>
						<div class="group {currentPage === '/me' ? 'clickable-active' : 'clickable'}">
							<a
								href="/me"
								aria-current="page"
								class="px-4 py-1 text-base group-hover:text-active-theme"
							>
								About Me
							</a>
						</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</nav>

	<TransitionSvelte url={currentPage}>
		{@render children()}
	</TransitionSvelte>
</div>
