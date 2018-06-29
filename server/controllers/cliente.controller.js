const Cliente = require('../models/cliente');
const ClienteCtrl = {};


ClienteCtrl.getClientes = async(req,res)=>{
  const clientes =   await Cliente.find();
  res.json(clientes);
};

ClienteCtrl.createCliente = async(req,res)=>{
    const cliente = new Cliente({
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        direccion: req.body.direccion,
        dui: req.body.dui,
        celular: req.body.celular,
        telefono: req.body.telefono,
        email: req.body.email,
        pais: req.body.pais,
        nreferencia: req.body.nreferencia,
        licencia: req.body.licencia


    });
    await cliente.save();
    res.json({
        status: 'Cliente Creado'
    });
};

ClienteCtrl.getCliente = async(req,res)=>{
    const cliente = await Cliente.findById(req.params.id);
    res.json(cliente);
    
};

ClienteCtrl.actualizarCliente = async(req,res)=>{
    const cliente = {
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        direccion: req.body.direccion,
        dui: req.body.dui,
        celular: req.body.celular,
        telefono: req.body.telefono,
        email: req.body.email,
        pais: req.body.pais,
        nreferencia: req.body.nreferencia,
        licencia: req.body.licencia
    };
    await Cliente.findByIdAndUpdate(req.params.id,{$set: cliente },{new: true});
    res.json({
        status: 'Cliente Actualizado'
    });
};

ClienteCtrl.deleteCliente = async(req,res)=>{
    await Cliente.findByIdAndRemove(req.params.id);
    res.json({status: 'Cliente Eliminado'});
};



module.exports = ClienteCtrl;