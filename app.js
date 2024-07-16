const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

app.get('/', (req, res) => {
  //res.send('Hello World!')
  res.sendFile(__dirname + '/views/index.html');
})
app.get('/home', (req, res) => {
    //res.send('Hello Home!')
    res.sendFile(__dirname + '/views/home.html');
})
app.get('/about', (req, res) => {
    //res.send('Hello About!')
    res.sendFile(__dirname + '/views/about.html');
})
app.get('/contact', (req, res) => {
    //res.send('Hello contact!')
    res.sendFile(__dirname + '/views/contact.html');
})
app.get('*', (req, res) => {
  //res.send('Hello contact!')
  res.send("Not found");
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log("http://127.0.0.1:3000");
})