var express = require('express'); // requre the express framework
var app = express();
var fs = require('fs');
app.use(express.json())
PORT = process.env.PORT || 3000
// set url as constant
books=
app.get('/books', function(req, res){
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data){
        res.end(data); // you can also use res.send()
    });
})
app.get('/bookarray', function(req, res){
  fs.readFile(__dirname + "/" + "usernum.json", 'utf8', function(err, data){
      res.end(data); // you can also use res.send()
  });
})
//Endpoint to get a single user by id
app.get('/book/:id', function (req, res) {
    // First retrieve existing user list
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       var users = JSON.parse( data );
       var user = users[req.params.id]
       res.end( JSON.stringify(user));
    });
 })
app.listen(
    PORT,
    () => console.log("Server is running on port",PORT)
)