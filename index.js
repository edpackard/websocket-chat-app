const express = require("express");

const app = express();
const server = require("http").createServer(app);
const port = process.env.PORT || 8080;
const path = require("path");

app.use(express.static(path.join(__dirname + "/public")));

// server test:
app.get("/", (req, res) => {
  res.status(200).send("Working");
});

server.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
