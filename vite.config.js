import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Check if the environment is in production
// Set the base URL conditionally
// eslint-disable-next-line no-undef
const base = process.env.NODE_ENV === 'production' ? '/backendless-tabs-jsx/' : '/';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base,
})
