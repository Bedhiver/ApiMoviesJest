import mongoose from "mongoose";

const clientOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  dbName: "db-movies",
};

export default async function initClientDbConnection() {
  try {
    await mongoose.connect(process.env.URL_MONGO, clientOptions);
    console.log("Connected");
  } catch (error) {
    console.log(error);
    throw error;
  }
}
