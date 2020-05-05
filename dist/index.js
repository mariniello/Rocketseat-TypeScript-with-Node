"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
app.get('/', (request, response) => {
    return response.json({ message: 'Hello World' });
});
app.listen(3333);
//# sourceMappingURL=index.js.map