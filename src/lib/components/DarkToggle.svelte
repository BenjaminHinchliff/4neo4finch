<script lang="ts">
	import { Moon, Sun } from 'lucide-svelte';
	import { onMount } from 'svelte';

	let dark: boolean | undefined = undefined;

	const isDark = () =>
		localStorage.theme === 'dark' ||
		(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

	onMount(() => {
		dark = isDark();
	});

	const toggleDark = () => {
		dark = !dark;
		if (dark) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
		localStorage.setItem('theme', dark ? 'dark' : 'light');
	};
</script>

{#if dark !== undefined}
	<button class="absolute top-2 right-2" on:click={toggleDark}>
		{#if dark}
			<Moon />
		{:else}
			<Sun />
		{/if}
	</button>
{/if}
