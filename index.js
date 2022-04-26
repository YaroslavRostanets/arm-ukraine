const express = require('express');
const app = express();

app.use(express.static('dist'));
app.get('/test', function (req, res) {
  res.send('Hello World')
})

app.listen(process.env.PORT || 5000)
