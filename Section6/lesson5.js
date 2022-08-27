const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=8e56ba7f6c9a0b61482594f2bd59f90a&query=New%20York'

request({ url: url, json: true }, (error, response) => {
    console.log(response.body.current.weather_descriptions + ' It is currently ' +
   response.body.current.temperature + ' degrees out. There is a ' +
   response.body.current.precip + '% chance of rain.')
   })

   