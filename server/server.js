//npm modules
const express = require('express');

// create the server
const app = express();

// tell the server what port to listen on
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on http://127.0.0.1:${PORT}`);
});
