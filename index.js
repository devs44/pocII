const bodyParser = require('body-parser')
const express=require('express')
const app=express()
const multer=require('multer')
const PORT=5000
const path=require('path')
app.set('view engine','hbs')

const db=require('./models/index')
// const storage=multer({
//     storage:multer.diskStorage({
//         destination:'./uploads',
//         filename:(req,file,cb)=>{
//             return cb(null, `${file.filename}_${Date.now()}${path.extname(file.originalname)}`)
//         }
//     })
// })
// const upload=multer({
//     storage:storage
// })
const upload=multer({dest:'./uploads'})
app.use(bodyParser.json())


const userCtrl=require('./controllers/userCtrl')
const userFileCtrl=require('./controllers/userFileCtrl')
const indexCtrl=require('./controllers/indexCtrl')

app.get('/',indexCtrl.home)

//users
app.get('/users',userCtrl.getUsers)
app.post('/addUser',userCtrl.addUsers)

//userFile
app.get('/userFiles',userFileCtrl.getUserFiles)
app.post('/addUserFile',upload.single('file'),userFileCtrl.addUserFiles)

const server=app.listen(PORT,function(){
    console.log(`Server running at http:localhost:${PORT}`)
})