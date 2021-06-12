import { Router } from "express";

const router = Router();

router.get("/getfoo", (req, res, next) => {
  res.json({ message: "foo" });
});

export default router;
