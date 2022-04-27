// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import JugarController from "App/Models/JugarController";
import mongoose from "mongoose";
export default class JugarsController 
{
    public async empezarPartida({request,response}){
        await mongoose.connect("mongodb+srv://AngelVargas2003:Angel2003@basesdedatosenlanube.fsnez.mongodb.net/gato?authSource=admin&replicaSet=atlas-lw22il-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true")
        const id=request.input('host')
        const clave=request.input('clave')
        response=new JugarController.JugarController({
            "clave_sala":clave,
            "host":id
        })
        response.save()
        return response
    }
    public async verPartidas({request,response}){
        await mongoose.connect("mongodb+srv://AngelVargas2003:Angel2003@basesdedatosenlanube.fsnez.mongodb.net/gato?authSource=admin&replicaSet=atlas-lw22il-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true")
       response=await JugarController.JugarController.find()
       return response
    }
    public async verPartida({params,response}){
        await mongoose.connect("mongodb+srv://AngelVargas2003:Angel2003@basesdedatosenlanube.fsnez.mongodb.net/gato?authSource=admin&replicaSet=atlas-lw22il-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true")
       response=await JugarController.JugarController.find({"clave_sala":Number(params.id)})
       return response
    }
}
