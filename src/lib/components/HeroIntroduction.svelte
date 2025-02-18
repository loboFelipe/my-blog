<script lang="ts">
	import { onMount } from 'svelte';

	const texts = [
		'Recursive Brewery',
		'Web Development',
		'Front-end',
		'Back-end',
		'Hardware',
		'Coffee'
	];
	let index = 0;
	let charIndex = 0;
	let dynamicText = ''; // Reactive variable

	function typeWriter(text: string, callback: () => void) {
		if (charIndex < text.length) {
			dynamicText += text.charAt(charIndex);
			charIndex++;
			setTimeout(() => typeWriter(text, callback), 100); // Adjust typing speed here
		} else {
			setTimeout(callback, 1000); // Pause before deleting
		}
	}

	function deleteText(callback: () => void) {
		if (charIndex > 0) {
			dynamicText = dynamicText.slice(0, -1);
			charIndex--;
			setTimeout(() => deleteText(callback), 50); // Adjust deleting speed here
		} else {
			callback();
		}
	}

	function startTyping() {
		const text = texts[index];
		typeWriter(text, () => {
			index = (index + 1) % texts.length; // Loop through the texts
			deleteText(startTyping);
		});
	}

	// Start the typing effect
	onMount(() => {
		startTyping();
	});
</script>

<div class="lg:max-w-lg">
	<div class="w-full flex items-center justify-start text-base font-semibold text-stone-600 gap-1">
		<p>Hello There</p>
		<p class="animate-waving">👋</p>
		<p>!</p>
	</div>
	<h1 class="mt-2 text-4xl font-semibold text-pretty text-gray-900 sm:text-5xl">
		<span class="underline">{dynamicText}</span>
	</h1>
	<p class="mt-6 text-xl/8 text-gray-700">
		Join us as we explore everything from frontend and backend technologies, hardware curiosity,
		and, of course, coffee! Stay tuned for insightful discussions and tips.
	</p>
</div>

<style>
	.underline {
		text-decoration: underline;
		transition: color 0.5s ease;
	}
</style>
