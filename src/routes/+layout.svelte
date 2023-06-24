<script lang="ts">
	import '../app.css';
	import Banner from '$lib/components/Banner.svelte';
</script>

<Banner />
<main class="mx-auto px-4 md:px-8 max-w-4xl">
	<slot />
</main>

<style lang="postcss">
	:global(html) {
		@apply bg-gray-100;
		@apply dark:bg-gray-900;
		@apply dark:text-white;
	}
</style>
