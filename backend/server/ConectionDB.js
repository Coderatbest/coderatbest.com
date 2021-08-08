const mongoose = require('mongoose');

const con_str = process.env.CON_STR || 'mongodb://localhost:27017/myDatabase';

//mongoose.Promise= global.Promise;
mongoose.connect(con_str,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(res=>{
    console.log('[db] conected!!!');
}).catch(err=>{
    console.log('[db] error to conect :c');
    console.log(err);
});

module.exports = mongoose;