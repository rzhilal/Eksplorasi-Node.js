const express = require('express')
const path = require('path')

console.log(__dirname)
const app = express()
const publicDirPath = path.join(__dirname, './public')

app.use(express.static(publicDirPath))

app.get('', (req, res)=>{
    res.send('<h1>Halo semuanya</h1>')
})

app.get('/app', (req, res)=>{
    res.send({
        forecast : 'It is raining',
        location : 'Boston'
    })
})

app.listen(3000, ()=>{
    console.log('server is running')
})