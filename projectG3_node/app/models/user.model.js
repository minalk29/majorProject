module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      username: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      }
      // ,
      // roleid :{
      //     type:Sequelize.INTEGER,
      //     allowNull:false,
      //     references:{
      //         model:'roles',
      //         key:'id'
      //     }
      // }

    },
    
    {
      timestamps: false
  });
  
    return User;
  };