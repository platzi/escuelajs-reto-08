const express = require("express"),
  app = express(),
  { config } = require("./config"),
  routes = require("./routes");

routes(app);

app.listen(config.port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
  console.log(`Listening http://localhost:${config.port}`);
});
