app.get('/weather', (req, res) => {
    // All query string key/value pairs are on req.query
    res.send ('You provided "' + req.query.address + '" as the address.)
})