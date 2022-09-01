const request = require('request')


const forecast = (callback) => {
    const url = 

    request({ url: url, json: true }, (error, response) => {
        if (error) {'http://api.weatherstack.com/current?access_key=8e56ba7f6c9a0b61482594f2bd59f90a&query=New%20York'
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.location.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                observation_time : response.body.current.observation_time,
                temperature : response.body.current.temperature,
                precip : response.body.current.precip,
                location : response.body.request.query
            })
        }
    })
}

module.exports = forecast