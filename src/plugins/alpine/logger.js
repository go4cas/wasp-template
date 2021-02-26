const AlpineLoggerMagicMethod = {
  start() {
    Alpine.addMagicProperty('logger', () => {
      return (text) => {
        console.log(text)
      }
    })
  }
}

export default AlpineLoggerMagicMethod
