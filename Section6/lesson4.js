const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=8e56ba7f6c9a0b61482594f2bd59f90a&query=New%20York'

request({url : url}, (error, response)=> {
    const data = JSON.parse(response.body)
    console.log(data.current.cloudcover)
})

