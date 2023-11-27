import express from "express";
import userController from "./userController";

const router = express.Router();

//add in middleware
router.post("/generate", userController.generateToken, (_, res) => {
  res.status(200).json(res.locals.signature);
});

export default router;
