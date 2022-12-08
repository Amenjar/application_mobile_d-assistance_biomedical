const fichemodel=require('../models/fichemodel')
module.exports={
    create:async(req,res)=>{
        const fiche=new fichemodel(req.body)
        
        await fiche.save(req.body,(err,fiche)=>{//pour enregistrer les donneées tssir verification au cas ou fama champ ou 7kaya na9sa ye3mel messag erreur si non cv tet3eda
            if (err) {
                res
                  .status(406)
                  .json({
                    success: false,
                    message: "Failed to created specialite",
                    data:null,err,
                  });
              } else {
                res.status(201).json({
                  success: true,
                  message: "specialite Add successufly",
                  data: fiche,
                });
        }
       
    })
    }   ,
    getall:async(req,res)=>{
       
      await fichemodel.find({}).exec((err,items)=>{//pour enregistrer les donneées tssir verification au cas ou fama champ ou 7kaya na9sa ye3mel messag erreur si non cv tet3eda
          if (err) {
              res
                .status(406)
                .json({
                  success: false,
                  message: "Failed to created fiche",
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
       
    await fichemodel.findById(req.params.id).exec((err,item)=>{ 
        if (err) {
            res
              .status(406)
              .json({
                success: false,
                message: "Failed to get fiche",
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
       
  await fichemodel.findByIdAndUpdate(req.params.id,req.body,{new:true}).exec((err,item)=>{ 
      if (err) {
          res
            .status(406)
            .json({
              success: false,
              message: "Failed to update fiche",
              data:null,err,
            });
        } else {
          res.status(201).json({
            success: true,
            message: " fiche updated successufuly",
            data: item,
          });
  }
  //pour quitter la fonction async
})
},
delete:async(req,res)=>{
       
  await fichemodel.findByIdAndRemove(req.params.id).exec((err,item)=>{ 
      if (err) {
          res
            .status(406)
            .json({
              success: false,
              message: "Failed to delete fiche",
              data:null,err,
            });
        } else {
          res.status(201).json({
            success: true,
            message: "fiche deleted successufuly",
            data: item,
          });
  }
  //pour quitter la fonction async
})
}}