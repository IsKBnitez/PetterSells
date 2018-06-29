const mongoose = require('mongoose');
const {Schema} = mongoose;

const ClienteSchema = new Schema({
    nombres: {type:String , required:true},
    apellidos: {type:String , required:true},
    direccion: {type:String,required:true},
    dui: { type:Number,required:true},
    celular: {type:Number,required:true},
    telefono: {type:Number,required:true},
    email:{type:String,required:false,default:'No tiene correo'},
    pais:{type: String , required: true},
    nreferencia:{type:Number,required:true},
    licencia:{type:Number,required:true}
});

module.exports =  mongoose.model('Cliente',ClienteSchema);