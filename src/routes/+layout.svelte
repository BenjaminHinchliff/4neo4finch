<script lang="ts">
	import '../app.css';
	import Banner from '$lib/components/Banner.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import DarkToggle from '$lib/components/DarkToggle.svelte';

	const LINKS = {
		Home: '/',
		Projects: '/projects',
		CV: '/cv'
	};
</script>

<svelte:head>
	<script type="text/javascript" src="/dark-mode.min.js"></script>
</svelte:head>

<Banner />
<Nav links={LINKS} />
<DarkToggle />
<main class="mx-auto px-4 md:px-8 max-w-4xl">
	<slot />
</main>

<style lang="postcss">
	:global(html) {
		@apply bg-gray-100;
	}
	:global(:is(.dark)) {
		@apply bg-gray-900 text-white;
	}
</style>
