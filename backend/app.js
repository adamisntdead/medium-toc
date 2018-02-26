const express = require("express");
const cors = require("cors");
const createTOC = require("./lib/create-toc");

const app = express()
app.use(cors())

app.get('/', (req, res) => {
  const url = 'https://' + req.query.url
  createTOC(url)
  .then(results => {
    res.send({
      url,
      results
    })
  })
  .catch(error => {
    res.sendStatus(502)
  })
  
})

app.listen(process.env.PORT || 8080, () => {
  console.log('Server Started')
})