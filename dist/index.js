"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const base_route_1 = __importDefault(require("./routes/base.route"));
const app = new app_1.default([new base_route_1.default]);
app.listen();
//# sourceMappingURL=index.js.map