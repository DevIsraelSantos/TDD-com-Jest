const {promisify} = require('util');
const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {

    const authHeader = req.headers.autorization;
    
    //Verifica se tem auth
    if(!authHeader){
        return res.status(401).json({messge: 'Token não enviado'})
    }

    //Get token
    const [, token] = authHeader.split(' ');

    try{
        const decoded = await promisify(jwt.verify)(token, process.env.APP_SECRET);
        
        req.userId = decoded.id;
        return next();
    }
    catch{
        return res.status(401).json({messge: 'Token invalido'})
    }
   
}