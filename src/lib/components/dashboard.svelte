<script lang="ts">
  import { writable } from 'svelte/store';
  import LoginModal from './login.svelte';
  
  type Message = {
    name: string;
    email: string;
    subject: string;
    message: string;
    createdAt: string | Date;
  };
  
  let messages = writable<Message[]>([]);
  let loading = writable(true);
  let error = writable<string | null>(null);
  let isAuthenticated = $state(false);
  let showLoginModal = $state(true);
  
  async function loadMessages() {
    try {
      $loading = true;
      const response = await fetch('/api/messages');
      const data = await response.json();
      await new Promise(resolve => setTimeout(resolve, 800));
      $messages = data;
      $error = null;
    } catch (err) {
      $error = 'Fehler beim Laden der Nachrichten';
      console.error('Error loading messages:', err);
    } finally {
      $loading = false;
    }
  }
  
  function formatDate(date: Date) {
    return date.toLocaleDateString('de-DE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
  
  function handleLogin() {
    isAuthenticated = true;
    showLoginModal = false;
    loadMessages();
  }
</script>

{#if showLoginModal && !isAuthenticated}
  <LoginModal onLogin={handleLogin} />
{/if}

{#if isAuthenticated}
  <div class="min-h-screen bg-catbase">
    <div class="p-6">
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-cattext text-3xl font-bold">Dashboard</h1>
      </div>
      
      {#if $loading}
        <div class="text-center py-12">
          <div class="animate-spin w-8 h-8 border-2 border-cattext/20 border-t-cattext rounded-full mx-auto mb-4"></div>
          <p class="text-cattext">Nachrichten werden geladen...</p>
        </div>
      {:else if $error}
        <div class="text-center py-12">
          <p class="text-red-500 mb-4">{$error}</p>
          <button 
            onclick={loadMessages}
            class="bg-catblue hover:bg-catsurface text-catsurface hover:text-catblue px-4 py-2 rounded-lg transition-colors"
          >
            Erneut versuchen
          </button>
        </div>
      {:else if $messages.length === 0}
        <div class="text-center py-12">
          <p class="text-cattext">Keine Nachrichten vorhanden</p>
        </div>
      {:else}
        <div class="space-y-6">
          {#each $messages as message}
            <div class="bg-catsurface border border-cattext/10 rounded-lg p-6">
              <div class="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div>
                  <h3 class="text-cattext font-bold text-lg">{message.name}</h3>
                  <p class="text-cattext">{message.email}</p>
                </div>
                <span class="text-cattext text-sm">
                  {formatDate(typeof message.createdAt === 'string' ? new Date(message.createdAt) : message.createdAt)}
                </span>
              </div>
              
              <h4 class="text-cattext font-semibold text-lg mb-3">
                {message.subject}
              </h4>
              
              <div class="text-cattext leading-relaxed">
                <p>{message.message}</p>
              </div>
            </div>
          {/each}
        </div>
      {/if}
    </div>
  </div>
{/if}
