const certificatemodel=require('../models/certificatmodel')
module.exports={
    create:async(req,res)=>{
      req.body.date_certificat=new Date()
        const certificat=new certificatemodel(req.body)
        
        await certificat.save(req.body,(err,certificat)=>{//pour enregistrer les donneées tssir verification au cas ou fama champ ou 7kaya na9sa ye3mel messag erreur si non cv tet3eda
            if (err) {
                res
                  .status(406)
                  .json({
                    success: false,
                    message: "Failed to created ordonnance",
                    data:null,err,
                  });
              } else {
                res.status(201).json({
                  success: true,
                  message: "ordonnance Add successufly",
                  data: certificat,
                });
        }
       
    })
    }   ,
    getall:async(req,res)=>{
       
      await certificatemodel.find({}).exec((err,items)=>{//pour enregistrer les donneées tssir verification au cas ou fama champ ou 7kaya na9sa ye3mel messag erreur si non cv tet3eda
          if (err) {
              res
                .status(406)
                .json({
                  success: false,
                  message: "Failed to get all ordonnance",
                  data:null,err,
                });
            } else {
              res.status(201).json({
                success: true,
                message: " success",
                data: items,
              });
      }
      //pour quitter la fonction async
  })
  },
  getbyid:async(req,res)=>{
       
    await certificatemodel.findById(req.params.id).exec((err,item)=>{ 
        if (err) {
            res
              .status(406)
              .json({
                success: false,
                message: "Failed to get ordonnance",
                data:null,err,
              });
          } else {
            res.status(201).json({
              success: true,
              message: " success",
              data: item,
            });
    }
    //pour quitter la fonction async
})
},

update:async(req,res)=>{
       
  await certificatemodel.findByIdAndUpdate(req.params.id,req.body,{new:true}).exec((err,item)=>{ 
      if (err) {
          res
            .status(406)
            .json({
              success: false,
              message: "Failed to update ordonnance",
              data:null,err,
            });
        } else {
          res.status(201).json({
            success: true,
            message: " ordonnanceupdated successufuly",
            data: item,
          });
  }
  //pour quitter la fonction async
})
},
delete:async(req,res)=>{
       
  await certificatemodel.findByIdAndRemove(req.params.id).exec((err,item)=>{ 
      if (err) {
          res
            .status(406)
            .json({
              success: false,
              message: "Failed to delete ordonnanace",
              data:null,err,
            });
        } else {
          res.status(201).json({
            success: true,
            message: "ordonnancedeleted successufuly",
            data: item,
          });
  }
  //pour quitter la fonction async
})
}}