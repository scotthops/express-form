const express = require('express');
var bodyParser = require('body-parser');

const app = express();
const port = 3000;
  
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/scottinfo', (req, res) => {
    res.json({
        name: 'scott',
          giveRaise: true,
          startingSalary: 100000
      });
  });
    
app.get('/signup/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
    
app.post('/signup/', urlencodedParser, (req, res) => {
    console.log('Got body:', req.body);
    res.send(`${req.body.first_name} ${req.body.last_name}, thank you for submitting your email address of ${req.body.email}`);
});
    
app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`)
  });