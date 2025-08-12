<script>
  let isScrolling = false;
	let activeSection = $state('#home');

	const navItems = [
		{ href: '#home', label: 'Home' },
		{ href: '#about', label: 'About' },
		{ href: '#portfolio', label: 'Portfolio' },
		{ href: '#contact', label: 'Kontakt' }
	];

	/**
	 * @param {string} href
	 */
	function scrollToSection(href) {
    isScrolling = true;
    activeSection = href;
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
    setTimeout(() => {
      isScrolling = false;
    }, 600);
	}

	$effect(() => {
		const handleScroll = () => {
      if (isScrolling) return;

			const sections = ['#home', '#about', '#portfolio', '#contact'];
			const scrollPosition = window.scrollY + 100;

			for (let i = sections.length - 1; i >= 0; i--) {
				const element = document.querySelector(sections[i]);
				if (element && (element instanceof HTMLElement) && element.offsetTop <= scrollPosition) {
					activeSection = sections[i];
					break;
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<nav class="fixed top-0 w-full bg-catbase backdrop-blur-md z-50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-center items-center h-16">
			<div class="flex items-center justify-center w-full">
				<div class="flex items-baseline space-x-4 sm:space-x-8 md:space-x-16 lg:space-x-64">
					{#each navItems as item}
						<button
							onclick={() => scrollToSection(item.href)}
							class="text-cattext px-3 py-2 font-bold transition-colors duration-200 rounded-md"
						>
							{#if activeSection === item.href}
								<div class="flex items-center gap-3">
									<div class="w-3 h-3 bg-cattext rounded-full"></div>
									<span>{item.label}</span>
								</div>
							{:else}
								<div class="flex items-center gap-3">
									<span>{item.label}</span>
								</div>
							{/if}
						</button>
					{/each}
				</div>
			</div>
		</div>
	</div>
</nav>
