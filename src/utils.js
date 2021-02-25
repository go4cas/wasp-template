import Spruce from '@ryangjchandler/spruce'

export const buildComponent = (data, methods = {}, init = () => {}) => {
  return () => { return { init, ...data, ...methods } }
}

export const registerComponents = async components => {
  await Object.entries(components).forEach(entry => {
    const [key, value] = entry
    const componentPath = entry[0].replace('./components/','').replace('/index.js','')
    const componentName = componentPath.lastIndexOf('/') >= 0 ? componentPath.substring(componentPath.lastIndexOf('/') + 1) : componentPath
    window[componentName] = value[componentName]
  })
}

export const registerStores = stores => {
  for (let store in stores) {
    Spruce.store(Object.keys(stores[store])[0], stores[store][Object.keys(stores[store])[0]])
  }
}
