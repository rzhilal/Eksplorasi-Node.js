 const weatherApp = require('./lesson9')
 const forecast = require('./lesson10')
 ////callback abstraction
 weatherApp((error, data) => {
    if (error) {
        return console.log(error)
    }
    forecast((error, data) => {
        if (error) {
            return console.log(error)
        }
        console.log(data.location)
        console.log(forecast)
    })
})