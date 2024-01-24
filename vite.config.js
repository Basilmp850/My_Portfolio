import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // envDir: './',
  // define: {
  //   // __VITE_GOOGLE_DRIVE_PDF__ : import.meta.env.VITE_GOOGLE_DRIVE_PDF ,
  //   __VITE_LINKEDIN__:import.meta.env.VITE_LINKEDIN,
  //   // __VITE_GMAIL__: import.meta.env.VITE_GMAIL,
  //   __VITE_GITHUB__:import.meta.env.VITE_GITHUB
  // },
  plugins: [react()],
  css:{
    modules:{
      localsConvention:"camelCase"
    }
  }
})

