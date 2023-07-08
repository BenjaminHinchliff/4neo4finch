<script lang="ts">
	import { cn } from '$lib/utils/cn';

	let className: string | null | undefined = undefined;
	export { className as class };
	export let href: string;
	export let disabled: boolean = false;

	$: styles = cn('underline text-orange-500 rounded transition-all', className);
</script>

{#if disabled}
	<button class={cn(styles, 'cursor-text text-orange-900 no-underline')} disabled>
		<slot />
	</button>
{:else}
	<a class={cn(styles, 'hover:bg-orange-500/30 hover:no-underline')} {href}>
		<slot />
	</a>
{/if}
