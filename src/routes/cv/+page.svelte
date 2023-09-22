<script lang="ts">
	import Link from '$lib/components/Link.svelte';
</script>

<object
	class="w-full h-[550px]"
	data={'/api/cv.pdf'}
	type="application/pdf"
	title="Resume/CV"
	aria-label="Resume/CV"
>
	<p>
		Unable to display PDF file.{' '}
		<Link href={'/api/cv.pdf'}>Download</Link>{' '}
		instead.
	</p>
</object>
