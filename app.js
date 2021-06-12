import express from "express";
import { join } from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import homeRouter from "./components/home/home";
import usersRouter from "./components/movies/moviesRoute";
import fooRouter from "./components/foo/fooRoute";
import { createServer } from "http";
import mongodb from "./services/mongo";
import cors from "cors";
import dotenv from 'dotenv';
// import path from "path";

// const __dirname = path.dirname(new URL(import.meta.url).pathname);

dotenv.config();

mongodb();

var app = express();

app.use(
  cors({
    exposedHeaders: ["Authorization"],
    origin: "*",
  })
);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, "public")));

app.use("/", homeRouter);
app.use("/foo", fooRouter);
app.use("/users", usersRouter);

var server = createServer(app);
server.listen(3000, () => {
  console.log("Server running on " + 3000);
  console.log(`http://localhost:${3000}`);
});

export default app;
