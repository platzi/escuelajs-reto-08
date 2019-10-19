require('dotenv').config();

const express = require('express'),
  path = require('path'),
  app = express(),
  port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  let userInfo = req.header('user-agent');
  res.send(`UserInfo: ${userInfo}`);
});

app.get('/receipts', (req, res) => {
  let file = path.join(__dirname, './assets/receipt.pdf');
  res.sendFile(file);
});

app.get('/products', (req, res) => {
  let storeProducts = [
    {
      id: '1',
      image: 'https://arepa.s3.amazonaws.com/camiseta.png',
      title: 'Camiseta',
      price: 25,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'https://arepa.s3.amazonaws.com/mug.png',
      title: 'Mug',
      price: 10,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'https://arepa.s3.amazonaws.com/pin.png',
      title: 'Pin',
      price: 4,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'https://arepa.s3.amazonaws.com/stickers1.png',
      title: 'Stickers',
      price: 2,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: 'https://arepa.s3.amazonaws.com/stickers2.png',
      title: 'Stickers',
      price: 2,
      description: 'bla bla bla bla bla'
    },
    {
      id: '7',
      image: 'https://arepa.s3.amazonaws.com/hoodie.png',
      title: 'Hoodie',
      price: 35,
      description: 'bla bla bla bla bla'
    }
  ];
  res.json(storeProducts);
});

app.listen(port, err => {
  if (err) {
    console.error('Error: ', err);
    return;
  }
  console.log(`Listening http://localhost:${port}`);
});
