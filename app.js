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
<<<<<<< HEAD
app.get("/rr222", function (req, res) {
    res.send("dfaHHdfdHHHHHsfdgHHHHHH")
})
=======

app.get("/llll", function (req, res) {
    res.send("HHasfsdfsdsdfHHHHHHHHHH")
})
>>>>>>> c221d2768bf875d410cdadfa9d575989c6c345db
