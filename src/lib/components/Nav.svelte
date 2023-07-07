<script lang="ts">
	import Link from '$lib/components/Link.svelte';

	export let links: Record<string, string>;
</script>

<nav class="flex justify-center">
	{#each Object.entries(links) as [name, href]}
		<Link class="block text-2xl m-2 p-1" {href}>
			{name}
		</Link>
	{/each}
</nav>
