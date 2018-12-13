const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const api = require("./api")




app.use(bodyParser.json())


app.listen(8000, function () {
    console.log("server listening at 8000")

})



app.get("/get", api.getmethod)

app.get("/rr", api.getmethod2)


app.get("/llll", api.getmethod3)
