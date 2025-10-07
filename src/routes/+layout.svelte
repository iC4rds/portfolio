<script>
  import '../app.css';
  import Footer from '$lib/components/footer.svelte';
</script>

<div class="min-h-screen bg-catbase">
  <main class="flex-grow">
    <slot />
  </main>
  
  <Footer />
</div>