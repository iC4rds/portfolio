<script>
  import Navbar from '$lib/components/navbar.svelte';
  import Hero from '$lib/components/hero.svelte';
  import Skills from '$lib/components/skills.svelte';
  import Portfolio from '$lib/components/portfolio.svelte';
  import Contact from '$lib/components/contact.svelte';
</script>

<div class="min-h-screen bg-gray-50">
  <Navbar />
  
  <main>
    <Hero />
    <Skills />
    <Portfolio />
    <Contact />
  </main>
</div>