"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const elysia_1 = require("elysia");
const app = new elysia_1.Elysia().get("/hello", () => "Hello Elysia");
exports.default = app.handle;
