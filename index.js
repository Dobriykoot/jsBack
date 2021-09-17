const express = require('express');
const http = require('http');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  console.log('URL = ', req.url);
  console.log('Original_URL = ', req.originalUrl);
  console.log('METHOD = ', req.method);
  console.log('HOST = ', req.headers.host);
  console.log('IsSecure = ', req.secure);
  console.log('BODY', req.body);
  console.log('QUERY', req.query);

  next();
});

app.all('/test', (req, res) => {
  res.status(200).json({ message: 'KKKKKK'});
})

app.all('/get', (req, res) => {
  res.status(200).json({ message: 'get'});
})

app.all('/post', (req, res) => {
  res.status(200).json({ message: 'post'});
})

app.all('/put', (req, res) => {
  res.status(200).json({ message: 'put'});
})

app.all('/patch', (req, res) => {
  res.status(200).json({ message: 'patch'});
})

app.all('/delete', (req, res) => {
  res.status(200).json({ message: 'delete'});
})

http.createServer(app).listen(3000, () => {
  console.log('Server is working on port 3000');
})

app.post('/sum', (req, res) => {
    let sum = req.body.a + req.body.b;
    res.status(200).json({sum})         
  });
  
  app.post('/reverseCase', (req, res) =>{
    let arr = req.body.str.split('');
    let reverseCase = [];
    arr.forEach(element => {
        if (element == element.toLowerCase()) { 
            reverseCase.push(element.toUpperCase());
        }
        else { 
            reverseCase.push(element.toLowerCase());
        }
    });
    res.status(200).json({reverseCase: reverseCase.join("")})
})

app.post('/reverseArray', (req, res) =>{
  let str = req.body.str.split('');
  let reverseArray = [];
  for(let i = str.length - 1; i>=0; i--){
      reverseArray.push(str[i]);
  }
  res.status(200).json({reverseArray: reverseArray.join("")})
})