import {Schema,model} from 'mongoose'
export default class JugarController{
  static partidaschema=new Schema({
    clave_sala:Number,
    host:Number,
    invitado:Number,
    jugadas:[{A1:String,A2:String,A3:String,B1:String,B2:String,B3:String,C1:String,C2:String,C3:String}],
    ganador:Number
  },{
    versionKey:false
  });
  static JugarController:any=model('partidas',this.partidaschema)  
}
