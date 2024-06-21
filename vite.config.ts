import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import {env} from 'process';

dotenv.config();

//const PORT: number = parseInt(process.env.clientPort!) || 3000;
const clientPort: number = parseInt(
  env.NODE_ENV === 'production' ? env.CLIENTPRODPORT! : env.CLIENTDEVPORT!
);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': `http://localhost:${clientPort}`,
    },
  },
});
