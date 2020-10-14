var express = require ( 'express' )
var app = express ()
app.use(express.static(__dirname + '/public'))

function adder(num1, num2) {
    return num1 + num2;
}
app.get('/', function(req,res) {
    res.sendFile('index.html');
});
// respond with "hello world" when a GET request is made to the homepage
app.get ( '/adder' , function ( req,res) {
    let num1 = parseInt(req.query.num1)
    let num2 = parseInt(req.query.num2)
    let result = adder(num1,num2);
    res.send ('Result of ' + num1 + '+' + num2 + ' = ' + result + '') 
}) 
 
// list to a particular port
app.listen (3000)
