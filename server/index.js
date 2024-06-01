const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const User = require('../server/models/user.model')
const jwt = require('jsonwebtoken')

const app = express();
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://parshav143:neh59@cluster0.igjbssc.mongodb.net/jwt-auth')

app.post('/api/user', async (req,res)=>{

    try {
         await User.create({

            name:req.body.name,
            email:req.body.email,
            password:req.body.password

        })

        res.json({status:200});
    } catch (error) {
        res.json({status:'500', error:error.message})
    }
    console.log(req.body);
})
app.get('/api/user', async (req,res)=>{

    const token = req.headers['x-access-token']

    try {

       const decode = jwt.verify(token,'neh123')
       const email = decode.email
        const user = await User.findOne({email:email})


        

        return res.json({status:200 , name:user.name});
        
    } catch (error) {
        res.json({status:'500', error:error.message})
    }
    console.log(req.body);
})

app.post('/api/login', async (req,res)=>{

    
    const user = await User.findOne({
        email:req.body.email,
        password:req.body.password
    })

    

    if(user){
        const token= jwt.sign({
            name:user.name,
            email:user.email
        },'neh123')
        return res.json({status:200, user:token})
    }else{
        return res.json({status:404, user:false})
    }
    

}) 



app.listen(3000);