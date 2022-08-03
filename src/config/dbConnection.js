require('dotenv').config()
const mongoose = require('mongoose')

class Connection {

    constructor() {
        this.connectMongoDB()
    }

    connectMongoDB() {

        const dbURI = process.env.DB_URL

        this.mongodbConnection = mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})

    }

}

module.exports = new Connection().mongodbConnection