const mongoose=require('mongoose');
const usermodel=require('./usermodel')//l'appel mte3 user li fiha heritage
const adminSchema=new mongoose.Schema({ 
 
    

})
usermodel.discriminator('admin',adminSchema)
module.exports = mongoose.model("admin")