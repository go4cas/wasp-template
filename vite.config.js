import WindiCSS from 'vite-plugin-windicss'

export default {
  root: './src',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  },
  plugins: [
    WindiCSS()
  ]
}