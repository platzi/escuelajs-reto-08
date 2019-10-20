const express = require("express");
const { config } = require('./config/index');
const platziStoreApi = require('./routes/platziStore');

const port = config.port;
const app = express();

platziStoreApi(app);

app.listen(port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
  console.log(`Listening http://localhost:${port}`);
  console.log(`PlatziStore API http://localhost:${port}/api/platzistore`)
});
