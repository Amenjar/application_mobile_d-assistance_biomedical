const mongoose=require('mongoose');
const usermodel=require('./usermodel')//l'appel mte3 user li fiha heritage
const patientSchema=new mongoose.Schema({ 
  
   
 
    dateNaissance:{
        type:String,
        trim :true,
    },
    // rendezvous:[{//variable n7ota anna bich n7ot fil base
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"rendez-vous"//ref li 7atatou fil model medecin
    // }],
  

})
usermodel.discriminator('patients',patientSchema)
module.exports = mongoose.model("patients")