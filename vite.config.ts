import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import { env } from 'process';

dotenv.config();

//const PORT: number = parseInt(process.env.clientPort!) || 3000;
const serverPort: number = parseInt(
  env.NODE_ENV === 'production' ? env.SERVERPRODPORT! : env.SERVERDEVPORT!
);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    proxy: {
      '/api': `http://localhost:${serverPort}`,
    },
    watch: {
      usePolling: true,
      interval: 500
    }
  },
});
