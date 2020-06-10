const userCollection = require('../utilities/userConnection');

const User = {}; //module

User.register =  (input)=>{           //register is a fnction of userdb module

    return userCollection.getUserCollection().then(model=>{
        return model.findOne({"email":input.email}).then(exists=>{
            if(exists){
                let err= new Error("Account already exists");
                err.status=400;
                throw err;
                
            }
            else{
                return model.insertMany({
                    "Name" : input.Name,
                    "email" : input.email,
                    "pswd" : input.pswd,
                    "address": input.address
                }).then(inserted=>{
                    if(inserted)
                        return inserted;
                    else
                        return null;
                    
                })
            }
        })
    })

}  

User.info = (email)=>{
    //console.log(email);
    return userCollection.getUserCollection().then(model=>{
        return model.findOne({"email":email}).then(found=>{
            if(found){ 
                return found.Name;}
            else{   return null;  }
                    
        
    })})}
    
User.login= (cred)=>{
    console.log(cred);
    return userCollection.getUserCollection().then(model=>{
        return model.findOne({"Name":cred.username,"pswd":cred.pswd}).then(exists=>{
            if(exists)
                return true;
            else
                return false;
        })
    })
}

module.exports = User;