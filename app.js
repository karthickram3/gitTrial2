const express = require("express")
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.listen(8000, function () {
    console.log("server listening at 8000")

})

app.get("/get", function (req, res) {
    res.send("HI EVERYBODY")
})

app.get("/rr", function (req, res) {
    res.send("HHHHHHHHHHHHH")
})
app.get("/rr222", function (req, res) {
    res.send("dfaHHdfdHHHHHsfdgHHHHHH")
})