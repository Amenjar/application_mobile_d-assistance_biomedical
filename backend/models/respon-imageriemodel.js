const mongoose=require('mongoose');
const usermodel=require('./usermodel')//l'appel mte3 user li fiha heritage
const responsableimagerieSchema=new mongoose.Schema({ 
 
    adresseLocal:{
        type:String,
        required:true,
        trim :true,
    },

    // dossier_medicale:[{//variable n7ota anna bich n7ot fil base
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"dossiers"//ref li 7atatou fil model medecin
    // }],
    verify: {
        type: String,
        enum: ["accepter", "refuser", "en attente"],
        default:"en attente"
    },


})
usermodel.discriminator('responsablesimg',responsableimagerieSchema)
module.exports = mongoose.model("responsablesimg")