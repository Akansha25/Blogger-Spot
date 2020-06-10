const articles= require('../model/article');

const articleService={};

articleService.getArticles=()=>{
    return articles.listArticles().then(articles=>{
        return articles;
    })
}

articleService.postArticle= (article)=>{
    return articles.addArticle(article).then(added=>{
        if(added==null){
            let err = new Error("Unable to post article!");
            err.status=500;
            throw err;
        }
        else{
            return added;
        }
    })
}

module.exports=articleService;