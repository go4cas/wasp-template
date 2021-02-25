import 'windi.css'
// import './style.css'
import { registerComponents, registerStores } from './utils.js'
const components = import.meta.globEager('./components/**/index.js')
const stores = import.meta.globEager('./components/**/store.js')

;(async () => {
  await registerComponents(components)
  await registerStores(stores)
  await import('alpine-magic-helpers')
  await import('alpinejs')
})()
