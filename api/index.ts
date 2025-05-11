import { Elysia } from "elysia";

const app = new Elysia().get("/hello", () => "Hello Elysia");

export default app.handle;
