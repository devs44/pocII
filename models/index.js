const {Sequelize,Datatypes,Model}=require('sequelize')

const sequelize=new Sequelize('document_verification','root','devi',{
  host:'localhost',
  logging:true,
  dialect:'mysql'
});

try{
  sequelize.authenticate();
  console.log('Connection has been established successfully')
}
catch(error){
  console.error('Unable to connect to database',error);
}

const db={};
db.Sequelize=Sequelize;
db.sequelize=sequelize;

db.user=require('./user')(sequelize,Datatypes,Model)
db.userFile=require('./userfile')(sequelize,Datatypes,Model)

// db.user.hasMany()


db.Datatypes=Datatypes;
db.sequelize.sync({force:false})
module.exports=db