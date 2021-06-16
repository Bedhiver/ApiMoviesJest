import { Router } from "express";
import MovieModel from "./moviesModel";
var router = Router();

/* GET movies listing. */
router.get("/", async (req, res, next) => {
  // res.send("movie-list");
  try {
    let movies = await MovieModel.find().exec();
    // res.status(200);
    res.status(200).json(movies);
    // res.send(movies);
  } catch (error) {
    res.status(500).send(error);
  }
});

/* POST movie */
router.post("/add", async (req, res) => {
  const { title } = req.body;
  const movie = new MovieModel({ title });
  const ret = await movie.save();
  res.json(ret);
});

/* GET movie by title */
router.get("/:title", async (req, res, next) => {
  try {
    let movie = await MovieModel.find({ title: req.params.title }).exec();
    res.status(200).json(movie);
    // res.send(movies);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
