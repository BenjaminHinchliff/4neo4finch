<script lang="ts">
	import { page } from '$app/stores';
	import PaginationLink from '$lib/components/PaginationLink.svelte';
	import Repo from '$lib/components/Repo.svelte';
	import { getPage } from '$lib/utils/get-page';
	import type { PageData } from './$types';
	import { ChevronLeft, ChevronRight } from 'lucide-svelte';

	$: pageNum = getPage($page.url);
	export let data: PageData;
</script>

{#each data.repos as repo (repo.id)}
	<Repo url={repo.html_url} name={repo.name} description={repo.description} />
{/each}

<div class="flex justify-center text-center my-2">
	<PaginationLink class="pr-3" disabled={pageNum <= 1} href={`/projects?page=${pageNum - 1}`}>
		<ChevronLeft />
		Prev
	</PaginationLink>
	<PaginationLink
		class="pl-3"
		disabled={data.repos.length < data.reposPerPage}
		href={`/projects?page=${pageNum + 1}`}
	>
		Next
		<ChevronRight />
	</PaginationLink>
</div>
