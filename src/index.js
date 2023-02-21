const express = require('express')
const fs = require('fs')

const app = express()

app.get('/', (req, res) => {

  fs.readFile("./src/home.html", 'utf-8', (err, html) => {
    if(err){  
      res.status(500).send(err)
      return
    }
    res.send(html)
  })
})


app.listen(process.env.PORT || 3000, () => console.log(`App avalible in http://localhost:3000`))