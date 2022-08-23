import express from 'express'
import axios from 'axios'

const app = express()
const port = 8080

app.use(express.static('../webapp/dist/webapp'))

app.get('/api/test', (req, res) => {
  axios.get('https://google.com')
    .then(web_response => {
      res.send(web_response.data)
    })
    .catch(error => {
      console.error(error)
    })
})

app.listen(port, () => {
  console.log(`server running on port ${port}`)
})