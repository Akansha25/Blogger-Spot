const { Schema }=require('mongoose');
const Mongoose=require('mongoose');
Mongoose.Promise=global.Promise;
Mongoose.set('useCreateIndex',true);
const dburl="mongodb://localhost:27017/blogger_db";

const articleSchema= Schema ({

    _id: String,
    title : { type :String, unique : true},
    body :  String,
    author : String,

},{ collection : "article", timestamps:true 
});

let articleCollection = {};

articleCollection.getArticleCollection = () =>{
    return Mongoose.connect(dburl, {useNewUrlParser : true}).then((database)=>{
        return database.model("article" , articleSchema)
    }).catch((error)=>{
        let err = new Error("Database connection error");
        err.status = 500;
        throw err;
    })
    
}

module.exports = articleCollection;

