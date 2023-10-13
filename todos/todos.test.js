// Import vitest
// Also, run vitest to check if it's up-to-date
// Test completed
import { test, expect } from "vitest";

// import the Express app from app.js
import app from "../app.js";

// import the function from Supertest (maybe call it `request` like the documentation did)
import request from "supertest";


// Import resetUsersTable function (this resets our database)te
import { resetAllTables } from "../db/helpers.js";

//Test skeleton
test("should pass - skeleton", function () {
  // code here
});

//Getting all todos
test("GET /api/todos", async function () {
  // await the 'resetAllTables' function
  await resetAllTables([
    { task: "Walk the dog", completion_date: "1999-01-08" },
    { task: "Feed the computer", completion_date: "2015-01-10" },
  ]);
  //    send a GET request to the /api/todos endpoint
  //    call `request` and pass in the Express app as an argument
  //    await the overall expression and assign it to a `response` constant
  const response = await request(app).get("/api/todos");

  // Assertions: response status = 200, response body = { success: true, payload: an array of todo objects } , Response header: Content-Type header should contain application/json

  expect(response.body.success).toBe(true)

  expect(Array.isArray(response.body.payload)).toBe(true)

  expect(response.headers["content-type"]).toMatch("application/json")

  expect(response.status).toBe(200)
});