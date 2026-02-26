<script lang="ts">
  let scrollY = $state(0);
  let heroSection: HTMLElement | null = null;

  $effect(() => {
    const handleScroll = () => scrollY = window.scrollY;
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<svelte:window bind:scrollY />

<section
  bind:this={heroSection}
  id="home"
  class="relative flex items-center justify-center bg-gradient-to-br bg-catbase pt-16 overflow-hidden"
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

<div class="relative z-10 flex justify-center -mt-[clamp(4rem,10vh,8rem)] pt-50 sm:pt-60 md:pt-70 lg:pt-90 pb-5">
    <div class="max-w-4xl mx-auto px-2 text-center">
      <div class="mb-4 transform transition-transform duration-75">
        <img 
          src="/image.png?height=200&width=200" 
          alt="profilepicture" 
          class="w-50 h-50 sm:w-70 sm:h-70 md:w-90 md:h-90 lg:w-100 lg:h-100 mx-auto object-cover text-cattext rounded-2xl sm:rounded-3xl"
        />
      </div>
    </div>
  </div>
</section>