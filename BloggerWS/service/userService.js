const user = require('../model/user');

const userService = {};

userService.register = (input)=>{
    return user.register(input).then(data=>{
        if(data==null){
            let err = new Error("User not registered");
            err.status=400;
            throw err;
        }
        else{
            return data;
        }
    
    })
}

// userService.information = (email)=>{
//     return userdb.info(email).then(name=>{
//         if(name) return name;
//         else {
//            return null;
//         }
        
//     })
// }

userService.login=(cred)=>{
    return user.login(cred).then(exist=>{
        if(exist)
            return true;
        else return false;
    })
}


module.exports = userService;
