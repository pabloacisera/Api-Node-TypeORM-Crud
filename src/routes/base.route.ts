import { Router, Request, Response } from "express";
import { Routes } from "../interfaces/route.interface";

class BaseRoute implements Routes{
  public path = '/alive';
  public router= Router();

  constructor(){
    this.initBaseRoutes();
  }

  public initBaseRoutes(){
    this.router.get(`${this.path}`, (req:Request, res: Response)=>{
      res.status(200).json({message: "Esta todo correcto!!!", ok:true})
    })
  }
}

export default BaseRoute;

