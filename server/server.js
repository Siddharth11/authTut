//npm modules
const express = require('express');

// create the server
const app = express();

// create the homepage route at '/'
app.get('/', (req, res) => {
  res.send('you just hit the home page\n');
});

// tell the server what port to listen on
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on http://127.0.0.1:${PORT}`);
});
