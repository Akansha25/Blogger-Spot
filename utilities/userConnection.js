const { Schema }=require('mongoose');
const Mongoose=require('mongoose');
Mongoose.Promise=global.Promise;
Mongoose.set('useCreateIndex',true);
const dburl="mongodb://localhost:27017/blogger_db";

const userSchema= Schema ({
    _id: String,
    Name : String,
    email : { type :String, unique : true},
    pswd : String,
    address: String

},{ collection : "user", timestamps:true 
});

let userCollection = {};

userCollection.getUserCollection = () =>{
    return Mongoose.connect(dburl, {useNewUrlParser : true}).then((database)=>{
        return database.model("user" , userSchema)
    }).catch((error)=>{
        let err = new Error("Database connection error");
        err.status = 500;
        throw err;
    })
    
}

module.exports = userCollection;

