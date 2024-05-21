import express from "express";
import { API_VERSION, LOG_FORMAT, NODE_ENV, PORT } from "./config/config";
import { Routes } from "./interfaces/route.interface";
import { logger } from "./utilities/logger";
import displayRoutes from "express-routemap";
import morgan from "morgan";
import cors from "cors";
import hpp from "hpp";
import helmet from "helmet";
import cookieParser from 'cookie-parser';
import corsConfig from "./config/cors.config";
import { stream } from './utilities/logger';


class App {
  public app: express.Application;
  public env: string;
  public port: number | string;
  public server: any;

  constructor(routes: Routes[]) {
    this.app = express();
    this.env = NODE_ENV || "development";
    this.port = Number(PORT) || 5000;

    this.initializeMiddlewares(); // Mover esta línea antes de las rutas
    this.initializeRoute(routes);
    this.connectToDatabase();
    this.initializeSwagger();
    this.initializeErrorHandlers();
  }

  public getServer() {
    return this.app;
  }

  public closeServer(done?: any) {
    this.server = this.app.listen(this.port, () => {
      done();
    });
  }

  public initializeRoute(routes: Routes[]) {
    routes.forEach((route) => {
      this.app.use(`/api/${API_VERSION}`, route.router);
    });
  }

  private connectToDatabase() {
   
  }
  
  

  private initializeMiddlewares() {
    this.app.use(morgan(LOG_FORMAT ?? '../logs', { stream }));
    this.app.use(cors(corsConfig));
    this.app.use(hpp());
    this.app.use(helmet());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser());
  }

  private initializeSwagger() {}

  public initializeErrorHandlers() {}

  public listen() {
    this.app.listen(this.port, () => {
      displayRoutes(this.app);
      logger.info("==============================================");
      logger.info(`===============env:${this.env}================`);
      logger.info(`=======App listinig on port ${PORT}=============`);
      logger.info("==============================================");
    });
  }
}


export default App;
