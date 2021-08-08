const express = require('express');
const service = require('../Service/UsersService');
const _response = require('../Response')
const router = express.Router();

router.get('/:parameter',(req,res)=>{
    res.send({param:req.params.parameter})
})
router.post('/Login', (req, res) => {
    if (!req.body.UserName || !req.body.Password)
        _response.error(res,{code:400})
    service.validateUser(req.body)
    .then(r=>{
        _response.success(res,r)
    })
    .catch(e=>{
        _response.error(res,e)
    });
});
router.post('/', (req, res) => {
    service.createUser(req.body)
    .then(r=>{
        _response.success(res,r)
    })
    .catch(e=>{
        _response.error(res,e)
    });
});
//console.log(req.ip);
//console.log(req.query);
//console.log(req.body);

module.exports = router;