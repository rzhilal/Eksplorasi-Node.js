const express = require('express')

const app = express()

app.get('', (req, res)=>{
    res.send('<h1>Halo semuanya</h1>')
})

app.get('/about', (req, res)=>{
    res.send('about')
})

app.get('/help', (req, res)=>{
    res.send('Help')
})

app.get('/app', (req, res)=>{
    res.send('Your Weather')
})


app.listen(3000, ()=>{
    console.log('server is running')
})