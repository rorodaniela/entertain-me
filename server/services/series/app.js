const express = require('express')
const {connect} = require('./config/mongodb')
const app = express()
const router = require('./routes/index')
const port = 4002

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(router)

connect().then(() => {
    app.listen(port, () => {
        console.log(`listen on port ${port}`);
    })
})