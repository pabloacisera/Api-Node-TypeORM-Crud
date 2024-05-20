"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class BaseRoute {
    path = '/alive';
    router = (0, express_1.Router)();
    constructor() {
        this.initBaseRoutes();
    }
    initBaseRoutes() {
        this.router.get(`${this.path}`, (req, res) => {
            res.status(200).json({ message: "Esta todo correcto!!!", ok: true });
        });
    }
}
exports.default = BaseRoute;
//# sourceMappingURL=base.route.js.map