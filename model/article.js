const articleCollection = require('../utilities/articleConnection');

const article = {}; //module

article.listArticles = ()=>{
    return articleCollection.getArticleCollection().then(model=>{
        return model.find({},{title:1,body:1,author:1,_id:0}).sort({"createdAt":-1}).then(articles=>{
            return articles;
        })
    })
}


article.addArticle = (article)=>{
    return articleCollection.getArticleCollection().then(model=>{

        return model.findOne({"title":article.title}).then(exists=>{
            if(exists){
                let err= new Error("Article already exists with this title");
                err.status=400;
                throw err;
                
            }

        else{
            return model.insertMany({
                "title":article.title,
                "body":article.body,
                "author":article.author
            }).then(added=>{
                if(added) 
                    return added;
                else
                    return null;
            })
            }
                
            }
        )})
        }

module.exports = article;