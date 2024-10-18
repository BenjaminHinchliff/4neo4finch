<script>
	import BodyP from '$lib/components/BodyP.svelte';
	import Link from '$lib/components/Link.svelte';

	const START_YEAR = 2015;
</script>

<h1 class="text-4xl mb-3 mt-2">I'm Benjamin, a Computer Scientist</h1>
<BodyP>
	I'm Benjamin, a computer scientist. I've been programming for{' '}
	{new Date().getFullYear() - START_YEAR}{' '}
	years now, since early middle school. I'm largely self-taught, and am currently attending California
	Polytechnic University for CS with a concentration on AI &amp; Machine Learning to improve my skills.
</BodyP>
<BodyP>
	I've worked professionally doing contract work for Web Development. I've also got a lot of other
	skills, everything from 3d graphics to a bit of machine learning to game development to
	programming language development. I love to learn new things and am always trying something new
	and improving my skills.
</BodyP>
<BodyP>
	I'm familiar with most mainstream languages, including (but not limited to) Python,
	Javascript/Typescript, C, C++, Java, Bash, SQL (and database stuff generally), Rust, and Haskell.
	Obviously, I'm happy to learn new ones as the need arises.
</BodyP>
<BodyP>
	Outside of work, my hobbies include learning about philosophy and ways of thinking and viewing the
	world, playing with my cats, hanging out with friends, and fixing and
	generally learning how things work.
</BodyP>
<BodyP>
	I've accumulated a lot of projects and experiments throughout the years, in various stages of
	completion. Feel free to look at the{' '}
	<Link href="/projects">projects page</Link> for a full list.
</BodyP>
