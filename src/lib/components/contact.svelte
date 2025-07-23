<script>
  let formData = $state({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  let isSubmitting = $state(false);
  let submitMessage = $state('');
  
  /**
	 * @param {{ preventDefault: () => void; }} event
	 */
  async function handleSubmit(event) {
    event.preventDefault();
    isSubmitting = true;
    
    // Simulate form submission
    setTimeout(() => {
      isSubmitting = false;
      submitMessage = 'Vielen Dank für Ihre Nachricht! Ich werde mich bald bei Ihnen melden.';
      formData = { name: '', email: '', subject: '', message: '' };
      
      setTimeout(() => {
        submitMessage = '';
      }, 5000);
    }, 1000);
  }
</script>

<section id="contact" class="py-20 bg-catbase">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold text-cattext mb-4">Kontakt</h2>
      <div class="w-24 h-1 bg-catblue mx-auto mb-6"></div>
    </div>
    
    <div class="grid lg:grid-cols-2 gap-12">
      <div class="space-y-8">
        <div>
          <h3 class="text-2xl font-bold text-cattext mb-6">Hier kann man mich erreichen</h3>
        </div>
        
        <div class="space-y-6">
          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 bg-catblue rounded-full flex items-center justify-center">
              <svg class="w-6 h-6 text-catsurface" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div>
              <h4 class="font-semibold text-cattext">E-Mail</h4>
              <p class="text-cattext">david-staudacher@outlook.de</p>
            </div>
          </div>
          
          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 bg-catblue rounded-full flex items-center justify-center">
              <svg class="w-6 h-6 text-catsurface" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
            </div>
            <div>
              <h4 class="font-semibold text-cattext">Telefon</h4>
              <p class="text-cattext">+49 123 456 7890</p>
            </div>
          </div>
          
          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 bg-catblue rounded-full flex items-center justify-center">
              <svg class="w-6 h-6 text-catsurface" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
            <div>
              <h4 class="font-semibold text-cattext">Standort</h4>
              <p class="text-cattext">Ravensburg, Deutschland</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="bg-catsurface p-8 rounded-2xl shadow-lg">
        <form onsubmit={handleSubmit} class="space-y-6">
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label for="name" class="block text-sm font-medium text-cattext mb-2">Name</label>
              <input
                type="text"
                id="name"
                bind:value={formData.name}
                required
                class="text-cattext w-full px-4 py-3 border border-cattext rounded-lg focus:ring-2 focus:ring-catblue focus:border-transparent transition-colors"
                placeholder="Ihr Name"
              />
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-cattext mb-2">E-Mail</label>
              <input
                type="email"
                id="email"
                bind:value={formData.email}
                required
                class="text-cattext w-full px-4 py-3 border border-cattext rounded-lg focus:ring-2 focus:ring-catblue focus:border-transparent transition-colors"
                placeholder="ihre.email@beispiel.com"
              />
            </div>
          </div>
          
          <div>
            <label for="subject" class="block text-sm font-medium text-cattext mb-2">Betreff</label>
            <input
              type="text"
              id="subject"
              bind:value={formData.subject}
              required
              class="text-cattext w-full px-4 py-3 border border-cattext rounded-lg focus:ring-2 focus:ring-catblue focus:border-transparent transition-colors"
              placeholder="Worum geht es?"
            />
          </div>
          
          <div>
            <label for="message" class="block text-sm font-medium text-cattext mb-2">Nachricht</label>
            <textarea
              id="message"
              bind:value={formData.message}
              required
              rows="5"
              class="text-cattext w-full px-4 py-3 border border-cattext rounded-lg focus:ring-2 focus:ring-catblue focus:border-transparent transition-colors resize-none"
              placeholder="Erzählen Sie mir von Ihrem Projekt..."
            ></textarea>
          </div>
          
          {#if submitMessage}
            <div class="p-4 bg-catgreen border border-catsurface text-catsurface rounded-lg">
              {submitMessage}
            </div>
          {/if}
          
          <button
            type="submit"
            disabled={isSubmitting}
            class="w-full bg-catblue hover:bg-catbase disabled:bg-blue-400 text-catsurface hover:text-catblue py-4 px-6 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center"
          >
            {#if isSubmitting}
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-catsurface" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Wird gesendet...
            {:else}
              Nachricht senden
            {/if}
          </button>
        </form>
      </div>
    </div>
  </div>
</section>
