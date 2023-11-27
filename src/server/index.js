import express from "express";
import router from "./router";

const { PORT = 3001 } = process.env;

export const app = express();

app.use(express.json());

// Serve API requests from the router
app.use("/api", router);

// Serve app production bundle
if (!process.env["VITE"]) {
  const frontendFiles = process.cwd() + "/dist";
  app.use(express.static(frontendFiles));
  app.get("/*", (_, res) => {
    res.send(frontendFiles + "/index.html");
  });
  app.listen(PORT, () => {
   console.log(`Listening on port ${PORT}`);
  });
}


