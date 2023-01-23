const home=async(req,res)=>{
    try{
        res.render('home')
    }catch(error){
        res.send("error",error.message)
    }
}

module.exports={
    home
}