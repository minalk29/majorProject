module.exports = (sequelize, Sequelize) => {
    const Score= sequelize.define("score", {
      score: {
        type: Sequelize.INTEGER
      }
      // ,  
      // userid :{
      //       type:Sequelize.INTEGER,
      //       allowNull:false,
      //       references:{
      //           model: 'users',
      //           key: 'id'
      //       }
      //   },
      //   quizid :{
      //       type:Sequelize.INTEGER,
      //       allowNull:false,
      //       references:{
      //           model: 'quizes',
      //           key: 'id'
      //       }
      //   }
        
     
      
    },
    
    {
      timestamps: false
  });
  
    return Score;
  };