import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	ssr: {
		noExternal: ['@libsql/client', '@libsql/isomorphic-ws', 'ws']
	},
	optimizeDeps: {
		include: ['ws', '@libsql/client', '@libsql/isomorphic-ws']
	},
	build: {
		rollupOptions: {
			external: [], // Stelle sicher, dass ws nicht externalisiert wird
		}
	}
});