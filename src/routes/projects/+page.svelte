<script lang="ts">
	import Repo from '$lib/components/Repo.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#each data.repos as repo}
	<Repo url={repo.html_url} name={repo.name} description={repo.description} />
{/each}
