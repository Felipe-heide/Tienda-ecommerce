const requestLogger = (request, response, next) => {
    console.log('Method:', request.method)
    console.log('Path: ', request.path)
    console.log('Body: ', request.body)
    console.log('---')
    next()
  }
  
  const unknownEndpoint = (req, res) => {
    if (req.path.startsWith('/api')) {
      res.status(404).send({ error: 'Unknown endpoint' });
    } else {
      res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
    }
  };
  
  
  module.exports = {
    requestLogger,
    unknownEndpoint,
  }