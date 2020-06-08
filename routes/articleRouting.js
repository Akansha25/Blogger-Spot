const express = require('express');
const articleRouter = express.Router();
const jwt = require('jsonwebtoken');
const articleService = require('../service/articleService');

articleRouter.get('',(req,res,next)=>{
    articleService.getArticles().then(articles=>{
        if(articles.length>0)
            {
                res.statusCode=200;
        articles=JSON.stringify(articles);
                res.json({data:articles});
            }
        else {
            res.statusCode=404;
            res.json({"message":"No articles found"})
        }

    })
})


articleRouter.post('',verifyToken,(req,res,next)=>{  
    jwt.verify(req.token , 'secretkey' ,(err, authData)=>{
        if(err){
            res.sendStatus(500);
           
        }
        else{
            articleService.postArticle(req.body).then(added=>{
                res.statusCode=201;
                res.json({"message":"New article created"});
            }).catch(err=> next(err) )
        }
    })})


function verifyToken(req,res,next){            //middleware that verifies token generated to token coming from front,for protected site
    console.log("in verify");
    const bearerHeader = req.headers['authorization'];
    
    //check if bearer is undefined
    if((typeof(bearerHeader)) != 'undefined'){
        
        const bearer = bearerHeader.split(' ');
        //get token from array
        const bearer_token=bearer[1];
        //set the token
        req.token = bearer_token;
        next();
    }
    else{
         res.send("unauthorized access");
        
    }
       
}


module.exports=articleRouter;