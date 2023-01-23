const {Sequelize,DataTypes,Model}=require('sequelize')
module.exports=(sequelize,DataTypes,Model)=>{
    

  const User = sequelize.define('Users', {
      email:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      user_id:{
        type:Sequelize.UUID,
        allowNull:false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
    }, 
    {
      sequelize,
      modelName:'Users',
      paranoid:true,
      deletedAt:'soft_delete'
    });
    return User;
}