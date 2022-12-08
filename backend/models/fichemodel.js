const mongoose=require('mongoose');
const ficheSchema=new mongoose.Schema({

    nom:{
        type:String,
        required:true,
        trim :true,
    },
    prenom:{
        type:String,
        required:true,
        trim :true,
    },
    email:{
        type:String,
        required:true,
        trim :true,
    },
    agepatient:{
        type:String,
        required:true,
        trim :true,
    },
    telephonepatient:{
        type:String,
        required:true,
        trim :true,
    },
    description:{
        type:String,
        required:true,
        trim :true,
    },
    detail:{
        type:String,
        required:true,
        trim :true,
    },
  
  
    secretaire:{//variable n7ota anna bich n7ot fil base
        type:mongoose.Schema.Types.ObjectId,
        ref:"secretaires"//ref li 7atatou fil model medecin
    },
    medecin:{//variable n7ota anna bich n7ot fil base
        type:mongoose.Schema.Types.ObjectId,
        ref:"medecins"//ref li 7atatou fil model medecin
    },


})

module.exports = mongoose.model("fiches",ficheSchema)