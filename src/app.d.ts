// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
  namespace App {
    interface Platform {
      env?: {
        DATABASE_URL: string;
        DATABASE_AUTH_TOKEN: string;
      }
    }
  }
}

export {};
