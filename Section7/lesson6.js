const express = require('express')
const path = require('path')

const app = express()
const publicDirPath = path.join(__dirname, './views')

app.get('', (req, res) => {
    res.render('index', {
    title: 'My title',
    name: 'Rizq Hilal Rifaasya'
    })
})

app.listen(3000, ()=>{
    console.log('server is running')
})