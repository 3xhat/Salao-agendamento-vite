import { defineConfig } from 'vite';
     import react from '@vitejs/plugin-react'; // Usando Babel ao invés de SWC

     export default defineConfig({
       plugins: [react()],
     });
