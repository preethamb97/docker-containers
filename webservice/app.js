const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('helllo preetham'));

app.listen(3000, () => {
  console.log('api running');
});
