export default {
  input: 'src/index.pres',
  
  include: [
    'src/components/**/*.html'
  ],
  
  output: {
    file: 'src/index.html',
    formatting: 'none'
  }
}