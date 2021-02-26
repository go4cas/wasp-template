import 'windi.css'
// import './style.css'
import { registerComponents, registerStores, registerMagicProps } from './utils.js'
const components = import.meta.globEager('./components/**/index.js')
const stores = import.meta.globEager('./components/**/store.js')
const plugins = import.meta.globEager('./plugins/alpine/*.js')

;(async () => {
  await registerComponents(components)
  await registerStores(stores)
  await registerMagicProps(plugins)
  await import('alpine-magic-helpers')
  await import('alpinejs')
})()
