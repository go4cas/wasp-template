export default {
  input: 'src/index.pres',
  
  include: [
    'src/components/**/*.pres'
  ],
  
  output: {
    file: 'src/index.html',
    formatting: 'none'
  }
}