import { buildComponent } from '../../utils.js'

const data = {
  open: false,
  title: 'I am the BODY',
  description: 'This is the conent that will be rendered inside the body'
}

const methods = {
  show() {
    this.open = true
  },
  hide() {
    this.open = false
  }
}

const body = buildComponent(data, methods)

export { body }
