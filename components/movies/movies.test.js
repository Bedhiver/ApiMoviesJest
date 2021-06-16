import { jest, it, expect, describe, beforeAll, afterAll } from "@jest/globals";
import server from "../../server";
import supertest from "supertest";
import mongoose from "mongoose";
import MovieModel from "./moviesModel";

// jest.useFakeTimers();

const databaseName = "dbMovies";
const request = supertest(server);

describe("test", () => {
  beforeAll(async () => {
    try {
      const clientOptions = {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        dbName: "dbMovies",
      };
      const url = `mongodb://devroot:devroot@localhost:27017/`;
      await mongoose.connect(url, clientOptions);
      console.log("Connected");
    } catch (err) {
      console.log("============= ERROR =============");
      console.log(err);
    }
  });

  it("Post in db", async () => {
    const res = await request.post("/add").send({
      title: "foo",
    });
    // expect(res.body).toBe("foo");
    // done();
  });

  it("Get movie by title", async () => {
    try {
      const res = await MovieModel.findOne({ title: "Interstellar" });
      expect(res.time).toBe("2:49");
      console.log(res.type);
      // done();
    } catch (error) {
      console.log("============= ERROR =============");
      console.log(error);
    }
  });
  it("Get the movies endpoint", async () => {
    try {
      const res = await request.get("/movies");
      expect(res.status).toBe(200);
      // expect(res.type).toEqual("text/html");
      // expect(res.text).toBe("movie-list");
      expect(res.body).toBeTruthy();
      // console.log(res.body);
      // done();
    } catch (err) {
      console.log("============= ERROR =============");
      console.log(err);
    }
  });
});

afterAll(async () => {
  await mongoose.disconnect();
});
