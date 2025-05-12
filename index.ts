var { Elysia } = require("elysia");

const app = new Elysia().get("/hello", () => "Hello Elysia").listen(3000);
