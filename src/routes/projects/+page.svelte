<script>
	import projects from '$lib/Projects';
</script>

<svelte:head>
	<title>Andrew Ruddy — Projects</title>
</svelte:head>

<div class="projectContainer">
	<div class="projects">
		<h1>Projects</h1>
		<p class="note">
			
		</p>
		{#each projects as project}
			<div class="project">
				<div class="header">
					<h2>
						{project.title}
					</h2>
					<div class="techsContainer">
						Technologies:
						<div class="techs">
							{#each project.technologies as tech}
								<div>{tech}</div>
							{/each}
						</div>
					</div>
					<div class="techsContainer">
						Role:
						<div class="techs">
							<div>{project.role}</div>
						</div>
					</div>
				</div>
				<p>
					{project.description}
				</p>
				<div style="text-align: center;">
					{#each project.url as url}
						<iframe 
							width="560" 
							height="315" 
							src={url}
							title="YouTube video player" 
							frameborder="0" 
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
							referrerpolicy="strict-origin-when-cross-origin" 
							allowfullscreen>
						</iframe>
					{/each}
					{#each project.pictures as picture, index}
						<img style="width: 100%" src={picture} alt={"Project " + (index + 1) + ""} />
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.projectContainer {
		width: 100%;
		max-width: 90vw;
		display: flex;
		justify-content: center;
		box-sizing: border-box;
		text-align: center;
		padding: 1em;
		margin: 0 auto;
		text-align: center;
	}

	.note {
		opacity: 0.5;
		margin: 0;
		max-width: 900px;
		text-align: left;
	}

	a {
		text-decoration: none;
	}

	.projectContainer .projects {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 40px;
		margin-top: 30px;
	}

	h1 {
		font-weight: 700;
		text-align: start;
	}

	h2 {
		display: flex;
		margin: 0;
	}

	.project {
		text-align: start;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		color: white;
		background: #111;
		padding: 2rem;
		width: 90vw;
		border-radius: 5px;
		transition: transform 0.2s ease-in-out;
		border-radius: 25px;
	}

	.project p {
		font-weight: 100;
		color: #708090;
	}

	.projects {
		width: 90vw;
		margin: 50px auto;
		display: grid;
		grid-gap: 1rem;
		grid-template-columns: 1fr;
		margin-bottom: 10px;
	}

	.techsContainer {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}

	.techs {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.techs > div {
		margin: 0 0 0 10px;
	}

	.button {
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
		border: 2px solid white;
		padding: 10px;
	}

	@media (min-width: 900px) {
		.projectContainer {
			padding: 0;
		}
		.projects > h1 {
			font-size: 48px;
			margin: 50px 0 0 0;
		}

		.projects {
			grid-template-columns: 1fr;
		}

		.projects .project {
			min-height: 200px;
		}
		.button {
			max-width: 200px;
		}
	}

	@media (min-width: 600px) {
		.projects {
			grid-template-columns: 1fr;
		}
	}
</style>
