import mongoose from "mongoose";

const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  year: String,
  type: [String],
  actors: [String],
  time: String,
});

const MovieModel = mongoose.model("movie", movieSchema);

export default MovieModel;
