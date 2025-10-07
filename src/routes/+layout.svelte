<script>
  import '../app.css';
  import Navbar from '$lib/components/navbar.svelte';
  import Footer from '$lib/components/footer.svelte';
</script>

<div class="min-h-screen bg-catbase">
  <Navbar />
  
  <main class="flex-grow">
    <slot />
  </main>
  
  <Footer />
</div>