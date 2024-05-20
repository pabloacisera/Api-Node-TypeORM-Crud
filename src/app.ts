import express from 'express'
import { API_VERSION, NODE_ENV, PORT } from "./config/config";
import { Routes } from "./interfaces/route.interface";
import { logger } from './utilities/logger';

class App {
  public app: express.Application;
  public env: string;
  public port: number | string;

  constructor(routes:Routes[]){
    this.app=express();
    this.env= NODE_ENV || 'development';
    this.port = Number(PORT) || 5000;

    this.initialiteRoute(routes)
  }

  public initialiteRoute(routes:Routes[]){
    routes.forEach((route)=>{
      this.app.use(`/api/${API_VERSION}`, route.router)
    })
  }

  public listen(){
    this.app.listen(this.port, ()=>{
      logger.info('==============================================')
      logger.info(`===============env:${this.env}================`)
      logger.info(`=======App listinig on port ${PORT}=============`)
      logger.info('==============================================')
    })
  }
}

export default App;