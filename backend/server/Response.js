const success=(res,response)=>{
    res.status(response.code || 200).send(response.resp || '')
}
const error=(res,response)=>{
    res.status(response.code || 500).send(response.resp || '')
}
module.exports ={
    success,
    error
}
