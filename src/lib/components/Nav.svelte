<script lang="ts">
	export let links: Record<string, string>;
</script>

<nav class="flex justify-center">
	{#each Object.entries(links) as [name, href]}
		<a
			class="block text-2xl underline text-orange-500 m-2 hover:bg-orange-500/30 hover:no-underline p-1 rounded transition-all"
			{href}
		>
			{name}
		</a>
	{/each}
</nav>
