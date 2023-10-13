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

// Import seedData
import { seedData } from "../db/seedData.js";

//Test skeleton
test("should pass - skeleton", function () {
  // code here
});

//Getting all todos
test("GET /api/todos", async function () {
  // await the 'resetAllTables' function
  await resetAllTables(seedData);
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

// Creating a todo
test("POST /api/todos", async function () {

// await the 'resetAllTables' function
await resetAllTables(seedData);

//    Send a post request to the /api/todos endpoint
//    call `request` and pass in the Express app as an argument
//    await the overall expression and assign it to a `response` constant
const response = await request(app)
.post("/api/todos")
.send({ task: "Eat chocolate", completionDate: "2023-10-13"})
.set('Accept', 'application/json');

// console.log(response.body);

// Declare a variable to store payload within the response body
const payloadArray = response.body.payload;

// Assertions:
// Request body = { task: string, completionDate: string },

// Declare a 'requestBody' variable that represents the actual request body
const requestBody = { task: "Eat chocolate", completionDate: "2023-10-13"};

// Comparing the actual request body with the expected data type
expect(typeof requestBody.task && typeof requestBody.completionDate).toBe("string");

// Request header: Content-Type header should contain application/json,
// To assert the Content-Type header, we need to access the headers of the request object and check if it contains the expected value.
const requestHeaders = { "Content-Type": "application/json" };
const expectedContentType = "application/json";

expect(requestHeaders["Content-Type"]).toBe(expectedContentType);

// Response body = { success: true, payload: newly created todo object },
expect(response.body.success).toBe(true);
expect(payloadArray.id).toBe(3);

  // Response status: 201,
expect(response.status).toBe(201);

  // Response header: Content-Type header should contain application/json
expect(response.header["content-type"]).toMatch("application/json")

});