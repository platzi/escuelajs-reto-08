require("dotenv").config();

const products = require("./routes/products"),
  express = require("express"),
  app = express(),
  port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  let userInfo = req.header("user-agent");
  res.send(`UserInfo: ${userInfo}`);
});

products(app);

app.listen(port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
  console.log(`Listening http://localhost:${port}`);
});
