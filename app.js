const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const PORT = process.env.PORT || 3500;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("test-hello-oo test aws");
});

app.get("/hat", (req, res) => {
  res.send("hats hats ");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
