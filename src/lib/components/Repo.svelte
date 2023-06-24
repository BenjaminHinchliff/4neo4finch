<script lang="ts">
	export let url: string;
	export let name: string;
	export let description: string | null | undefined;
</script>

<div class="border-b border-gray-400 p-1">
	<a class="block rounded transition-all p-8 hover:bg-orange-500/30" href={url}>
		<h2 class="text-2xl font-bold">{name}</h2>
		<p>{description ?? '(no description)'}</p>
	</a>
</div>
