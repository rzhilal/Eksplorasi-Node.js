const request = require('request')


const weatherApp = (address, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=8e56ba7f6c9a0b61482594f2bd59f90a&query=New%20York'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.location.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude : response.body.location.lat,
                longitude : response.body.location.lon,
                location : response.body.request.query
            })
        }
    })
}

module.exports = weatherApp