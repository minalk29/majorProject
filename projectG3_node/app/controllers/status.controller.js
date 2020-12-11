const db = require("../models");

const Tutorial = db.status;
const que=db.question;
exports.create = (req, res) => {
    // Validate request
    if (!req.body.quizeId) {
     res.status(400).send({
       message: "Content can not be empty!"
     });
     return;
   }
 
   // Create a fav
   const tutorial = {
     quizeId: req.body.quizeId,
     userId: req.body.userId,
     userans:req.body.userans,
     questatus: req.body.questatus,
     remainingtime:req.body.remainingtime,
     questionId:req.body.questionId
   };
 
   // Save fav in the database
   Tutorial.create(tutorial)
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while creating the Tutorial."
       });
     });
 };
 exports.findOne= (req, res) => {
     console.log("ilygjgyyukjyu");
    const id = req.params.uid;
    const quid=req.params.qid;
    Tutorial.findAll({
        include: ["userqu"],
        where: { quizeId:quid, userId:id } })
    .then(data => {
      res.send(data);   
      console.log(data);
      
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};
exports.findAll = (req, res) => {
  
    const id = req.params.id;
    que.findAll(
        { 
             where: {quizeId:id} })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
};