//console.log('The server.js workss');
const express = require('express');
const bodyParser= require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}))
// app.set('view engine', 'ejs');




app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
})


// app.get('/', function(req, res){
//   // renders index.ejs
//   res.render('index.html')
// })

app.listen(3000, function(){
  console.log('listening on 3000')
});
