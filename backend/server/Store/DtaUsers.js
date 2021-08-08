const Model = require('../Models/UserDto');

 const validateUser=async(User)=>{
    //return User.UserName=='Alex' && User.Password=='1234';
    const userDB= await Model.findOne(User);
    return !!userDB;
}
const createUser=(User)=>{
    const user = new Model(User);
    user.save();
    return true;
}
module.exports = {
    validateUser,
    createUser
}