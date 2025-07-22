<script>
  let isMenuOpen = $state(false);
  
  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#skills', label: 'Skills' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Kontakt' }
  ];
  
  /**
	 * @param {string} href
	 */
  function scrollToSection(href) {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    isMenuOpen = false;
  }
</script>

<nav class="fixed top-0 w-full bg-catbase backdrop-blur-md z-50">
  <div class="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16">
      <!-- Desktop Navigation -->
      <div class="hidden md:block">
        <div class="ml-10 flex items-baseline space-x-64">
          {#each navItems as item}
            <button
              onclick={() => scrollToSection(item.href)}
              class="text-gray-700 px-3 py-2 text-sm font- transition-colors duration-200 rounded-md"
            >
              {item.label}
            </button>
          {/each}
        </div>
      </div>
      
      <!-- Mobile menu button -->
      <div class="md:hidden">
        <button
          onclick={() => isMenuOpen = !isMenuOpen}
          class="text-gray-700 focus:outline-none focus:text-blue-600 p-2"
        >
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {#if isMenuOpen}
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            {:else}
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            {/if}
          </svg>
        </button>
      </div>
    </div>
  </div>
  
  <!-- Mobile Navigation -->
  {#if isMenuOpen}
    <div class="md:hidden bg-white border-t border-gray-200">
      <div class="px-2 pt-2 pb-3 space-y-1">
        {#each navItems as item}
          <button
            onclick={() => scrollToSection(item.href)}
            class="text-gray-700 block px-3 py-2 text-base font-medium w-full text-left rounded-md transition-colors"
          >
            {item.label}
          </button>
        {/each}
      </div>
    </div>
  {/if}
</nav>
