var express = require('express');
var app = express();

const path = require('path');
const router = express.Router();
/*
app.get('/', function(req, res){
   res.send("Hello world! in calcultor");
});

*/
router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/cal.html'));
  //__dirname : It will resolve to your project folder.
})
app.use('/', router);
app.listen(3000);

console.log('Running at Port 3000');