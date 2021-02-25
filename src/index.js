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

/*
document.querySelector('#app').innerHTML = `
<div class="w-40 h-40 bg-blue-300 text-white">hello</div>
<div class="w-40 h-40 bg-red-300 text-white">hello2</div>
<div class="w-40 h-40 bg-green-300 text-white">hello3</div>
<div class="w-40 h-40 bg-gray-300 text-white">hello4</div>
<div class="w-40 h-40 bg-blue-300 text-white">hello5</div>
`
*/