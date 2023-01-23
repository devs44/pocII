const {Sequelize,DataTypes,Model}=require('sequelize')
module.exports=(sequelize,DataTypes,Model)=>{
  const userFile = sequelize.define('userFiles', {   
      file_id:{
        type:Sequelize.UUID,
        allowNull:false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      data:{
        type:Sequelize.BLOB('long'),
        allowNull:false
      }
    }, 
    {
      sequelize,
      modelName:'userFiles',
      paranoid:true,
      deletedAt:'soft_delete'
    });
    return userFile;
}