const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// middleware
app.use(function (req, res, next) {
  if (req.body["waiterName"] == "manoj") {
    res.status(404).send("Unauthorized waiter.");
  } else {
    next();
  }
});

app.get("/flight", (req, res) => {
  res.send("flight data");
});

app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      "<h1>hello I am server, I can listen your request and here is the data.</h1>"
    );
});

// 2 input
app.listen(3000, () => {
  console.log(`Server is listening on PORT ${3000}`);
});
