const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('src'));

// app.get('/', (request, response) => {
//   response.send('Hello from Express!')
// })

app.listen(port, (err) => {
  if (err) {
    return console.log('general error:', err)
  }

  console.log(`server is listening on ${port}`)
})