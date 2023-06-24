<script lang="ts">
	import { cn } from '$lib/utils/cn';

	let className: string | null | undefined = undefined;
	export { className as class };
	export let href: string;
</script>

<a
	class={cn(
		className,
		'underline text-orange-500 hover:bg-orange-500/30 hover:no-underline rounded transition-all'
	)}
	{href}
>
	<slot />
</a>
