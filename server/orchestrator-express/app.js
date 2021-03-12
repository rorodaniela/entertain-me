const express = require('express')
const app = express()
const port = 4000
const router = require('./routes/index')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(router)

app.listen(port, () => {
    console.log(`listen on port ${port}`);
})