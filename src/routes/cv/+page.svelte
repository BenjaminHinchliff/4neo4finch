<script lang="ts">
	import Link from '$lib/components/Link.svelte';
	
	const CV = "https://raw.githubusercontent.com/BenjaminHinchliff/resume/main/resume.pdf"
</script>

<object
	class="w-full h-[550px]"
	data={CV}
	type="application/pdf"
	title="Resume/CV"
	aria-label="Resume/CV"
>
	<p>
		Unable to display PDF file.{' '}
		<Link href={CV}>Download</Link>{' '}
		instead.
	</p>
</object>
