const server = require('./server')

server.get('/', (req, res) => {
  return res.render('index')
})

server.listen(process.env.PORT || 3000)
