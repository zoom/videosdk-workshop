import path from "path";
import express from "express";
import router from "./router.js";
// const cors = require("cors");
const { PORT = 3001 } = process.env;

const app = express();

app.use(express.json());
// app.use(cors());

// Serve API requests from the router
app.use("/api", router);

// Serve app production bundle
app.use(express.static("dist"));

// Handle client routing, return all requests to the app
app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "/../dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
