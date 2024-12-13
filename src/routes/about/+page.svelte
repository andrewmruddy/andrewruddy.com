<script>
	import skills from '$lib/Skills';
</script>

<svelte:head>
	<title>Andrew Ruddy — About</title>
</svelte:head>

<div class="container">
	<main>
		<h1>About</h1>
		<p>
			I am a mechanical engineer with extensive experience in advanced manufacturing, robotics, and process improvement. As the Manufacturing Engineering Manager for SLB's Oklahoma City Technology Center, I lead initiatives that integrate cutting-edge automation, data-driven methodologies, and Lean Six Sigma principles to drive operational excellence. My hands-on technical expertise includes designing and programming robotic systems, implementing innovative tooling systems, and developing custom software solutions to optimize manufacturing workflows. Whether collaborating with global teams, solving complex engineering challenges, or mentoring the next generation of engineers, I am committed to finding the most effective technology and approach to achieve impactful, sustainable results.
		</p>
		<h2>Skills</h2>
		{#each Object.entries(skills) as [section, technologies]}
			<ul>
				<li>
					<h4>
						{section}:
					</h4>
					<div class="list">
						{#each technologies as technology}
							<div>
								{technology}
							</div>
						{/each}
					</div>
				</li>
			</ul>
		{/each}
	</main>
</div>

<style>
	.container {
		max-width: 900px;
		padding: 0;
		display: flex;
		justify-content: center;
	}

	main {
		max-width: 100%;
		min-height: 500px;
		text-align: left;
		margin: 0 auto;
		box-sizing: border-box;
	}

	h1 {
		font-weight: 700;
		margin: 0 0 50px 0;
		font-size: 36px;
		text-align: start;
	}

	h2 {
		margin-top: 50px;
	}

	.list {
		display: flex;
		flex-direction: column;
		gap: 30px;
	}

	@media (min-width: 900px) {
		.list {
			flex-direction: row;
		}
		main > h1 {
			font-size: 48px;
		}
	}
</style>
