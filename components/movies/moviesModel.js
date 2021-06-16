import mongoose from "mongoose";

const Schema = mongoose.Schema;

const movieSchema = new Schema(
  {
    title: String,
    year: String,
    type: [String],
    actors: [String],
    time: String,
  },
  {
    timestamps: {
      createdAt: "created_at",
    },
  }
);

const MovieModel = mongoose.model("movie", movieSchema);

export default MovieModel;
