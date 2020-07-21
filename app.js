const express = require('express')
const bodyParser = require("body-parser");
const app = express()
const port = 5500
const date = require(__dirname+"/date.js")

var item = []
var workitem = []

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(express.static('public'))

app.get('/', (req, res) => {

    res.render('list', {
        days: date.getDay(),
        newlistitem: item
    })
})

app.post('/', function (req, res) {

    var title = req.body.list

    if (title === 'Work List') {
        workitem.push(req.body.in)
        res.redirect('/work')
    } else {
        item.push(req.body.in)
        res.redirect('/')
    }


})

app.get('/work', (req, res) => {
    res.render('list', {
        days: "Work List",
        newlistitem: workitem
    })
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.listen(port)