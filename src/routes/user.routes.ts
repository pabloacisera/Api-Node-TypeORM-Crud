import { Routes } from '../interfaces/route.interface'
import {Router, Request, Response} from 'express'

class userRoutes implements Routes {
  public path= '/user';
  public router= Router()

  constructor (){
    this.initUserRoute();
  }

  /**
   * initUserRoute
   */
  public initUserRoute() {

    this.router.get(`${this.path}`, (req:Request, res: Response)=>{
      return res.json({
        ok:true,
        message: "Lista de usuarios!>>>"
      })
    })

    this.router.get(`${this.path}/:id`, (req:Request, res: Response)=>{
      const { id: userId }= req.params;
      console.log('Parametro: ', userId)
      return res.status(200).json({
        ok:true,
        message:"Detalle de usuario"        
      })
    })

    this.router.post(`${this.path}/create`, (req:Request, res: Response)=>{
      const { body:userBody } = req;
      console.log('cuerpo de la peticion: ', userBody)
      return res.status(200).json({
        ok:true,
        message: ">>>Usuario creado satisfactoriamente!"
      })
    })

    this.router.put(`${this.path}/update/:id`, (req:Request, res: Response)=>{
      const { id: userId } = req.params;
      console.log('Parametro del Request: ', userId)
      return res.status(200).json({
        ok:true,
        message: ">>>Usuario modificado satisfactoriamente!"
      })
    })

    this.router.delete(`${this.path}/delete/:id`, (req:Request, res: Response)=>{
      const { id: userId } = req.params;
      console.log('Parametro del Request: ', userId)
      return res.status(200).json({
        ok:true,
        message: ">>>Usuario eliminado satisfactoriamente!"
      })
    })

  }
}

export default userRoutes;