"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const staticInitTime = Date.now();
let isColdStart = true;
function default_1(_request, response) {
    let coldStartResult = false;
    if (isColdStart) {
        isColdStart = false;
        coldStartResult = true;
    }
    const handlerRunTime = Date.now();
    const resp = {
        handlerRunTime,
        staticInitTime,
        coldStartResult,
        processUptime: process.uptime(),
    };
    response.status(200).json(resp);
}
exports.default = default_1;
