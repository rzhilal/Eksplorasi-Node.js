const https = require('http')
const url = 'http://api.weatherstack.com/current?access_key=8e56ba7f6c9a0b61482594f2bd59f90a&query=New%20York'
const request = https.request(url, (response) => {
    let data = ''
    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })
    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})
request.on('error', (error) => {
    console.log('An error', error)
})
request.end()