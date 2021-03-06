const express = require('express')
const {connect} = require('../../monolith/config/mongodb')
const app = express()
const router = require('../../monolith/routes')
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(router)

connect().then(() => {
    app.listen(port, () => {
        console.log(`listen on port ${port}`);
    })
})