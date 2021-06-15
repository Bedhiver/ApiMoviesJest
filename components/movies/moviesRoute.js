import { Router } from "express";
import MovieModel from "./moviesModel";
var router = Router();

/* GET users listing. */
router.get("/", async (req, res, next) => {
  // res.send("movie-list");
  try {
    let movies = await MovieModel.find().exec();
    // res.json(movies);
    res.send(movies);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
