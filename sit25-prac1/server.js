var express = require ( 'express' )
var path = require('path')
var app = express ()
app.use(express.static(__dirname + '/public'))

// respond with "hello world" when a GET request is made to the homepage
app.get ( '/' , function ( req,res ) {

    res.send ('hello world')
})

app.get ( '/addnumbers' , function ( req,res) {
    num1 = parseInt(req.query.num1)
    num2 = parseInt(req.query.num2)
    sum = num1 + num2
    res.send ('The sum of the two numbers ' + num1 + ' and ' + num2 + ' = ' + sum)
})

app.get ( '/getaccounts' , function ( req,res) {
    var accounts = JSON.parse(req.query.accounts)
    console.log(accounts)
})
// list to a particular port
app.listen (3000)
