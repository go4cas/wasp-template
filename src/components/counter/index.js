import { buildComponent } from '../../utils.js'

const data = {
  title: 'Click + or -'
}

const methods = {
  countUp() {
    this.$store.counter.count++
  },
  countDown() {
    this.$store.counter.count--
  }
}

const counter = buildComponent(data, methods)

export { counter }
