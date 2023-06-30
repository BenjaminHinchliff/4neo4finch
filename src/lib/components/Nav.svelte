<script lang="ts">
	import { page } from '$app/stores';
	import Link from '$lib/components/Link.svelte';
	import { cn } from '$lib/utils/cn';

	export let links: Record<string, string>;
</script>

<nav class="flex justify-center">
	{#each Object.entries(links) as [name, href]}
		<Link
			class={cn('block text-2xl m-2 p-1', $page.url.pathname === href && 'no-underline')}
			{href}
		>
			{name}
		</Link>
	{/each}
</nav>
