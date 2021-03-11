const express = require('express')
const {connect} = require('./config/mongodb')
const app = express()
const router = require('./routes')
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(router)

connect().then(() => {
    app.listen(port, () => {
        console.log('listen on port 3000');
    })
})