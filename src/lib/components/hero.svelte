<script lang="ts">
  let scrollY = $state(0);
  let heroSection: HTMLElement | null = null;

  // Parallax effect calculation
  $effect(() => {
    const handleScroll = () => scrollY = window.scrollY;
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const inHeroSection = $derived(() => {
    if (!heroSection) return false;
    const rect = heroSection.getBoundingClientRect();
    return rect.top <= 0 && rect.bottom >= 0;
  });
</script>

<svelte:window bind:scrollY />

<section
  bind:this={heroSection}
  id="home"
  class="relative min-h-screen flex items-center justify-center bg-gradient-to-br bg-catbase pt-16 overflow-hidden"
>
  <div 
    class="absolute inset-0 flex items-top p-18 justify-center pointer-events-none"
    style="clip-path: inset(0)"
  >
    <h1 
      class="fixed text-[24vw] md:text-[24vw] lg:text-[24vw] font-black text-catblue select-none leading-none"
      style="transform: scaleY(1.4) scaleX(0.9); font-stretch: ultra-condensed;"
    >
      DAVID
    </h1>
  </div>

  <div class="relative z-10 min-h-screen flex items-end p-10 justify-center pt-16">
    <div class="max-w-4xl mx-auto px-6 text-center">
      <div 
        class="mb-8 transform transition-transform duration-75"
      >
        <img 
          src="/image.png?height=200&width=200" 
          alt="profilepicture" 
          class="w-100 h-100 mx-auto object-cover shadow-2xl text-cattext"
        />
      </div>
    </div>
  </div>
</section>