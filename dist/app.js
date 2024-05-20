"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./config/config");
const logger_1 = require("./utilities/logger");
class App {
    app;
    env;
    port;
    constructor(routes) {
        this.app = (0, express_1.default)();
        this.env = config_1.NODE_ENV || 'development';
        this.port = Number(config_1.PORT) || 5000;
        this.initialiteRoute(routes);
    }
    initialiteRoute(routes) {
        routes.forEach((route) => {
            this.app.use(`/api/${config_1.API_VERSION}`, route.router);
        });
    }
    listen() {
        this.app.listen(this.port, () => {
            logger_1.logger.info('==============================================');
            logger_1.logger.info(`===============env:${this.env}================`);
            logger_1.logger.info(`=======App listinig on port ${config_1.PORT}=============`);
            logger_1.logger.info('==============================================');
        });
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map