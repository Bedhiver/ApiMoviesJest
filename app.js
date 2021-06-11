import express, { json, urlencoded } from "express";
import { join } from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import path from "path";
import homeRouter from "./routes/home.js";
import usersRouter from "./routes/users.js";
import fooRouter from "./routes/foo.js";
import { createServer } from "http";

const __dirname = path.dirname(new URL(import.meta.url).pathname);
var app = express();

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
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
