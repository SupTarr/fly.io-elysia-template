import { Elysia } from "elysia";

const app = new Elysia()
  .get("/", () => "Hello Elysia")
  .listen({
    hostname: '0.0.0.0',
    port: 3000
  });

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
