import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr(
    {
  svgrOptions: {
    svgoConfig: {
      plugins: [
        {
          name: 'removeAttrs',
          params: { attrs: 'fill' }
        }
      ]
    }
  }
}
  )],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
