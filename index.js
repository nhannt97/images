const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, './store')))

app.get('/', (req, res)=>{
    res.send('OK')
})


app.listen(3000)