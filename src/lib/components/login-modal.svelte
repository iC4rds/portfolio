<script lang="ts">
  let isOpen = $state(true);
  let username = $state('');
  let password = $state('');
  let loading = $state(false);
  let error = $state<string | null>(null);
  
  interface LoginModalProps {
    onLogin: () => void;
  }
  
  let { onLogin }: LoginModalProps = $props();
  
  async function handleLogin(event: Event) {
    event.preventDefault();
    
    if (!username.trim() || !password.trim()) {
      error = 'Bitte füllen Sie alle Felder aus';
      return;
    }
    
    try {
      loading = true;
      error = null;
      
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username.trim(),
          password: password.trim()
        })
      });
      
      if (response.ok) {
        const data = await response.json();
        // Store auth token or session info if provided
        if (data.token) {
          localStorage.setItem('auth-token', data.token);
        }
        
        isOpen = false;
        onLogin();
      } else {
        const errorData = await response.json();
        error = errorData.message || 'Ungültige Anmeldedaten';
      }
    } catch (err) {
      error = 'Verbindungsfehler. Bitte versuchen Sie es erneut.';
      console.error('Login error:', err);
    } finally {
      loading = false;
    }
  }
</script>

{#if isOpen}
  <div class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
    <div class="bg-catsurface border border-cattext/20 rounded-lg shadow-2xl w-full max-w-md">
      <div class="p-6 border-b border-cattext/10">
        <h2 class="text-cattext text-2xl font-bold text-center">Dashboard Login</h2>
        <p class="text-cattext/70 text-center mt-2">Bitte melden Sie sich an, um fortzufahren</p>
      </div>
      
      <form onsubmit={handleLogin} class="p-6 space-y-4">
        <div>
          <label for="username" class="block text-cattext font-medium mb-2">
            Benutzername
          </label>
          <input
            type="text"
            id="username"
            bind:value={username}
            disabled={loading}
            class="w-full bg-catbase border border-cattext/20 text-cattext px-4 py-3 rounded-lg focus:outline-none focus:border-catblue transition-colors disabled:opacity-50"
            placeholder="Ihr Benutzername"
            autocomplete="username"
          />
        </div>
        
        <div>
          <label for="password" class="block text-cattext font-medium mb-2">
            Passwort
          </label>
          <input
            type="password"
            id="password"
            bind:value={password}
            disabled={loading}
            class="w-full bg-catbase border border-cattext/20 text-cattext px-4 py-3 rounded-lg focus:outline-none focus:border-catblue transition-colors disabled:opacity-50"
            placeholder="Ihr Passwort"
            autocomplete="current-password"
          />
        </div>
        
        {#if error}
          <div class="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-lg text-sm">
            {error}
          </div>
        {/if}
        
        <button
          type="submit"
          disabled={loading}
          class="w-full bg-catblue hover:bg-catblue/80 disabled:bg-catblue/50 text-catsurface font-semibold py-3 px-4 rounded-lg transition-colors disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {#if loading}
            <div class="animate-spin w-4 h-4 border-2 border-catsurface/30 border-t-catsurface rounded-full"></div>
            Anmeldung läuft...
          {:else}
            Anmelden
          {/if}
        </button>
      </form>
    </div>
  </div>
{/if}
