require('dotenv').config()
const app = require('./app')
const database = require('./config/dbConnection')
const path = require('path')
const PORT = process.env.PORT || 3000

app.disable('x-powered-by')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './app/views'))
app.set("layout removed", false)

app.listen(PORT, () => {
    database
        .then( () => {
            console.log('MongoDB Connected!')
            console.log(`Server running on http://localhost:${PORT}/`)
        })
        .catch(err => {
            console.log(`${err}`)
        })  
})