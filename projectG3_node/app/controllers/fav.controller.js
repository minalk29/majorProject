const db = require("../models");
const { favourite } = require("../models");
const Tutorial = db.favourite;
// const ser=db.Sequelize;
// const { QueryTypes } = require('sequelize');

const Op = db.Sequelize.Op;
exports.findOne= (req, res) => {
    const id = req.params.id;
    const quid=req.params.qid;
    Tutorial.findOne({
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

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    const updateedStatus=req.body.status;

console.log(updateedStatus);
    Tutorial.update( 
        { status: updateedStatus },
        { where: { id: id } }
      ).then(function(rowsUpdated) {
        res.send(rowsUpdated)
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Tutorial with id=" + id
        });
      });
};

// Create and Save a new fav
exports.create = (req, res) => {
    // Validate request
    if (!req.body.quizid) {
     res.status(400).send({
       message: "Content can not be empty!"
     });
     return;
   }
 
   // Create a fav
   const tutorial = {
     quizeId: req.body.quizid,
     userId: req.body.userid,
     status: req.body.status
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

 //list of favquiz
//  exports.findAll = (req, res) => {
//     const id = req.params.id;
//     Tutorial.findAll({ where: {userid:id,status:true} })
//       .then(data => {
//         res.send(data);
//         console.log(data);
        
//       })
//       .catch(err => {
//         res.status(500).send({
//           message:
//             err.message || "Some error occurred while retrieving tutorials."
//         });
//       });
// };

// exports.findAll = (req, res) => {
//     const id = req.params.id;
//     console.log(id);


// joinquery =db.sequelize.query('SELECT quizname from quizes,favourites where quizes.id=favourites.quizid and favourites.status=true and favourites.userid='+id, {
//         //replacements: {ids: carIds, createdDate: currentDateMonth},
//          model: db.quize,
//          mapToModel: true
//        }).then((data)=>{
//            console.log(data);
//            res.send(data);

//        });
//        console.log(joinquery);

// }   


exports.findAll=(req,res) => {
    const id=req.params.id;
    console.log("ds");
    return Tutorial.findAll({
      include: ["quizs"],
      where: {userid:id,status:true}
    } ).then(data => {
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
  