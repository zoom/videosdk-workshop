import express from "express";
import userControllers from "./Controllers/userControllers.js";

const router = express.Router();

//add in middleware
router.post("/generate", userControllers.generateToken, (_, res) => {
  res.status(200).json(res.locals.signature);
});

export default router;
