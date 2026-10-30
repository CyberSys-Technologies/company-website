import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    // No source maps in production: they would publish the full readable source
    sourcemap: false
  },
  server: {
    // Bind IPv4 explicitly; the default only listened on ::1, so 127.0.0.1 got no response
    host: '127.0.0.1',
    port: 3000
  }
});