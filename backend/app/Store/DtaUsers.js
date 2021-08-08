const validateUser=(User)=>{
    return User.UserName=='Alex' && User.Password=='1234';
}
const createUser=(User)=>{
    return true;
}
module.exports = {
    validateUser,
    createUser
}