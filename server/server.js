const express = require("express");
const ratelimit = require("express-rate-limit");

const app = express();
const PORT = process.env.PORT || 3000;


const limiter = ratelimit({
  windowMs: 1000,
  max: 1,
  message: "Too many times!"
})

app.get("/", limiter, (req, res) => res.send("Home page"));

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
