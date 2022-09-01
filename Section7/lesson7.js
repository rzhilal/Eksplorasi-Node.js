const hbs = require('hbs')
// Other lines hidden for brevity

const partialsPath = path.join(__dirname, '../templates/partials')
hbs.registerPartials(partialsPath)
// Other lines hidden for brevity

app.set('view engine', 'hbs')
app.use(express.static(publicDirPath))

app.get('*', (req, res) => {
    res.render('404', {
    title: '404',
    name: 'Andrew Mead',
    errorMessage: 'Page not found.'
    })
})