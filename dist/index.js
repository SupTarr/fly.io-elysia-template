"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var elysia_1 = require("elysia");
var node_1 = require("@elysiajs/node");
var app = new elysia_1.Elysia({ adapter: (0, node_1.node)() })
    .get("/", function () { return "Hello Elysia"; })
    .listen(3000, function (_a) {
    var hostname = _a.hostname, port = _a.port;
    console.log("\uD83E\uDD8A Elysia is running at ".concat(hostname, ":").concat(port));
});
