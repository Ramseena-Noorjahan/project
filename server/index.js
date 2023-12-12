    const express = require ('express')
    const app = express()
    const cors = require('cors')
    const mongoose= require("mongoose")
    const User =require ('./models/usermodels')
    app.use(express.json())
    mongoose.connect('mongodb://127.0.0.1:27017/dress-collections')
    app.use(cors())
    
    app.post('/api/register',async(req,res)=>{
        
       try {
        const user = await User.create({
            fname:req.body.name,
            lname:req.body.lname,
            email:req.body.email,
            password:req.body.password,

        })
        res.json({status:"ok"})
      
       } catch (error) {
        console.log(error)
        res.json({status:"error",error:'Duplicate email'})
       }
       
    })
    

    app.post('/api/login',async(req,res)=>{
       
       try {
        const user = await User.findOne({
            email:req.body.email,
            password:req.body.password
           })
           if(user){
                return  res.json({status:"ok",user:true})
           }else{
            
            return  res.json({status:"error",user:false})

           }
       
       
       
       } catch (error) {
        console.log(error)
        res.json({status:"error",error:'Duplicate email'})
       }
       
    })
    app.listen(4000,()=>{
        console.log("the server created port on 4000");
    })