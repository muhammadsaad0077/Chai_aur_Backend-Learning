require('dotenv').config()
const express = require('express')
const app = express()
const port = 5005

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/love', (req, res)=>{
    res.send("Your love is coding")
})

app.get('/login', (req, res)=>{
    res.send("<h1>Login Here to see Web</h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})