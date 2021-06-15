import { jest, it, expect } from "@jest/globals";
import server from "../../server";
import supertest from "supertest";
import mongoose from "mongoose";

jest.useFakeTimers();
// jest.setTimeout(10000);

const databaseName = "dbMovies";
const request = supertest(server);

beforeAll(async () => {
  const url = `mongodb://@localhost:27017/${databaseName}`;
  await mongoose.connect(url, { useNewUrlParser: true });
});

it("Get the movies endpoint", async () => {
  try {
    const res = await request.get("/movies");
    expect(res.status).toBe(200);
    expect(res.type).toEqual("text/html");
    expect(res.text).toBe("movie-list");
    // done();
  } catch (err) {}
});
