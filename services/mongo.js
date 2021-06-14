import mongoose from "mongoose";

const clientOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  dbName: "db-movies",
};

export default async function initClientDbConnection() {
  try {
    // await mongoose.connect(process.env.URL_MONGO, clientOptions);
    await mongoose.connect(
      `mongodb://${process.env.MONGO_ROOT_USER}:${process.env.MONGO_ROOT_PASSWORD}@localhost:27017`,
      clientOptions
    );
    console.log("Connected");
  } catch (error) {
    console.log("======== ERROR ========");
    console.log(error);
    throw error;
  }
}
