const express = require('express');
const path = require('path');

const app = express();
const port = 3100;

app.use(express.static('./'));
app.use('/', (req, res) => res.sendFile(path.resolve('./index.html')));
app.listen(port, (err) => {
  if(err) {
      throw err;
  }

  console.log(`Server started & listen port: ${port}`);
});
