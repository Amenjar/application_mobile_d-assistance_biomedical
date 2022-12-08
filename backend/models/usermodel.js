const mongoose=require('mongoose');
const baseoption={
    discriminatorkey:'itemtype',
    collection:'users'
}

const userSchema=new mongoose.Schema({ 
    firstname:{
        type:String,
       
        trim :true,
    },
    lastname:{
        type:String,
        //champ obligatoire a remplir
        trim:true,//supprimer les caracteres speciaux et l'espace
    },
    email:{
        type:String,
        
        trim:true,
    },
    
    password:{
        type:String,
        required:true,//champ obligatoire a remplir
        trim:true,//supprimer les caracteres speciaux et l'espace
    },
    role: {
        type: String,
        enum: ["Medecin", "Patient", "Secretaire", "Admin","Responsable analyse","Responsable imagerie"],
        default:"Patient",
    },
    phone:{
        type:String,
        //champ obligatoire a remplir
        trim:true,//supprimer les caracteres speciaux et l'espace 
    },


   

} ,baseoption,{timestamps:true})
module.exports = mongoose.model("user",userSchema)