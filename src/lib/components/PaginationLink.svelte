<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import Link from './Link.svelte';

	export let disabled: boolean;
	export let href: string;
	let className: string;
	export { className as class };
	const styles = cn(className, 'flex items-center text-xl p-1 rounded transition-all');
</script>

<Link class={styles} {href} {disabled}>
	<slot />
</Link>
