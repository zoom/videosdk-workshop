const path = require("path");
const express = require("express");
const app = express();
const router = require("./router");
const cors = require("cors");
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "/../build")));
app.use("/generate", router);

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/../build/index.html"));
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: err,
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;
