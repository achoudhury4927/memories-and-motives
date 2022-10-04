import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("I AM ALIVE");
});

export default router;
