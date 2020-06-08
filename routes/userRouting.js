const express = require('express');
const userRouter = express.Router();
const jwt = require('jsonwebtoken');
const usrService = require('../service/userService');


userRouter.post('/register',(req,res,next)=>{    //user register
    usrService.register(req.body).then(data=>{
        res.statusCode=201;
        res.json({"message":"New user created"});
    }).catch(err=> next(err) )
});


userRouter.post('/login',(req,res)=>{  
    const user = {
        username : req.body.username,
        pswd : req.body.passwrd
    }
    usrService.login(user).then(exist=>{
        if(exist){
            jwt.sign({cred : user},'secretkey',{expiresIn : '3600s'},(err,token)=>{//if user exists,generates token
                res.statusCode=200;    
                res.json({"message": "success", tokenno : token});
                })
        }
        else
            {
                res.statusCode=400;
                res.json({"message":"unregistered user"});
            
            }
    })
  
});


// userRouter.get('/info/:emailid',(req,res,next)=>{    //get name by email id
//     let emailid = req.params.emailid;
//     //console.log(emailid);
//     usrService.information(emailid).then(name=>{
//         if(name==null)
//             res.json({"message":"unregistered user"});
            
//        else
//        res.send("Hello"+ " " +name);
         
//     })
// });



module.exports = userRouter;



