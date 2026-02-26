<script>
	const personalInfo = [
		{
			label: 'Location',
			value: 'Ravensburg, Germany',
			icon: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z'
		},
		{
			label: 'GitHub',
			value: 'github.com/iC4rds',
			link: 'https://github.com/iC4rds',
			icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
		},
		{
    label: 'Spotify',
    value: 'spotify.com/iC4rds',
    link: 'https://open.spotify.com/user/5t58bnj0kd737fc19jdx7xea2?si=e537cd8d33c849a8',
    icon: 'M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.419.119-.839-.12-.959-.48-.12-.421.12-.84.48-.96 4.56-1.08 8.58-.6 11.76 1.32.36.24.479.66.3 1.021zm1.44-3.3c-.301.48-.84.66-1.321.36-3.24-1.98-8.16-2.521-11.76-1.381-.48.12-1.02-.18-1.14-.66-.12-.48.18-1.02.66-1.14 4.08-1.26 9.48-.66 13.26 1.56.42.24.6.84.301 1.261zm.12-3.36c-3.84-2.28-10.14-2.52-13.86-1.38-.6.18-1.26-.18-1.44-.78-.18-.6.18-1.26.78-1.44 4.32-1.32 11.28-1.02 15.72 1.62.54.3.72 1.02.42 1.56-.3.48-1.02.66-1.5.42h-.12z'
		},
		{
			label: 'Letterboxd',
			value: 'letterboxd.com/iCards',
			link: 'https://letterboxd.com/iCards/',
			icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M7.24 14.8c-1.55 0-2.8-1.25-2.8-2.8s1.26-2.8 2.8-2.8c1 0 1.88.53 2.37 1.33-.27.43-.42.93-.42 1.47s.15 1.04.42 1.47c-.49.79-1.37 1.33-2.37 1.33m4.76 0c-1.01 0-1.88-.53-2.37-1.33.27-.43.42-.93.42-1.47s-.15-1.04-.42-1.47C10.12 9.74 11 9.2 12 9.2s1.88.53 2.37 1.33c-.27.43-.42.93-.42 1.47s.15 1.04.42 1.47c-.49.79-1.37 1.33-2.37 1.33m4.76 0c-1.01 0-1.88-.53-2.37-1.33.27-.43.42-.93.42-1.47s-.15-1.04-.42-1.47c.49-.79 1.37-1.33 2.37-1.33 1.55 0 2.8 1.25 2.8 2.8s-1.26 2.8-2.8 2.8'
		}
	];
</script>

<section id="about" class="py-20 bg-catbase min-h-screen">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<h2 class="text-4xl md:text-5xl font-bold text-cattext mb-4">About Me</h2>
			<div class="w-24 h-1 bg-catblue mx-auto mb-6"></div>
		</div>

		<div class="grid lg:grid-cols-2 gap-16 items-start">
			<div class="space-y-8">
				<div class="space-y-6 text-cattext leading-relaxed">
					<p class="text-lg">
						I am 20 years old and doing a dual study program at <a href="https://sap.com" target="_blank" class="hover:text-catblue">SAP</a> in Computer Science focusing on Artificial Intelligence and Software Development. My passion for programming started in school.
					</p>

					<p class="text-lg">
						I have experience in various programming languages and frameworks, including TypeScript, Python, React and Svelte. I enjoy building web applications and exploring new technologies.
					</p>

					<p class="text-lg">
						When I'm not coding, I listen to music, watch movies, or drink coffee.
					</p>
				</div>
			</div>

			<div class="space-y-8">
				<div class="bg-catsurface rounded-lg p-6 border border-cattext/10">
					<div class="space-y-4">
						{#each personalInfo as info}
							<div class="flex items-center gap-4">
								<div class="w-10 h-10 bg-catblue/20 rounded-lg flex items-center justify-center flex-shrink-0">
									<svg class="w-5 h-5 text-catblue" fill="currentColor" viewBox="0 0 24 24">
										<path d={info.icon} />
									</svg>
								</div>
								<div class="flex-1 min-w-0">
									<div class="text-cattext/70 text-sm">{info.label}</div>
									{#if info.link}
										<a
											href={info.link}
											target="_blank"
											rel="noopener noreferrer"
											class="text-cattext hover:text-catblue transition-colors font-medium truncate block"
										>
											{info.value}
										</a>
									{:else}
										<div class="text-cattext font-medium">{info.value}</div>
									{/if}
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
