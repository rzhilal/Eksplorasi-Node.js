const express = require('express')


const app = express()

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