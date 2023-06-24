<script lang="ts">
	import Link from '$lib/components/Link.svelte';
	import cv from '$lib/assets/Resume_CV.pdf';
</script>

<object
	class="w-full h-[550px]"
	data={cv}
	type="application/pdf"
	title="Resume/CV"
	aria-label="Resume/CV"
>
	<p>
		Unable to display PDF file.{' '}
		<Link href={cv}>Download</Link>{' '}
		instead.
	</p>
</object>
