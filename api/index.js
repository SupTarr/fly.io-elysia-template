"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const elysia_1 = require("elysia");
const node_1 = require("@elysiajs/node");
const app = new elysia_1.Elysia({ adapter: (0, node_1.node)() })
    .get('/', () => 'Hello Node!');
exports.default = app.fetch;
