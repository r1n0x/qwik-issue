import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import babelPlugin from "vite-plugin-babel";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      preact({
          babel: {
              plugins: [
                  ['@babel/plugin-proposal-decorators', { legacy: true }]
              ]
          }
      }),
  ]
})
