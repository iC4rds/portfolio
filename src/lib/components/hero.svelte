<section id="home" class="min-h-screen flex items-center justify-center bg-gradient-to-br bg-catbase pt-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <div class="max-w-4xl mx-auto">
      <!-- Profile Image -->
      <div class="mb-8">
        <img 
          src="/placeholder.svg?height=200&width=200" 
          alt="Profilbild" 
          class="w-48 h-48 rounded-full mx-auto object-cover shadow-2xl border-4 border-white"
        />
      </div>
      
      <!-- Main Content -->
      <h1 class="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
        Hallo, ich bin
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Max Mustermann
        </span>
      </h1>
      
      <p class="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
        Full-Stack Entwickler & UI/UX Designer mit Leidenschaft für moderne Webtechnologien 
        und benutzerfreundliche Interfaces.
      </p>
      
      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button 
          onclick={() => {
            const el = document.querySelector('#portfolio');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Meine Projekte ansehen
        </button>
        <button 
          onclick={() => {
            const el = document.querySelector('#contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          class="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
        >
          Kontakt aufnehmen
        </button>
      </div>
      
      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  </div>
</section>
