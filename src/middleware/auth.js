const jwt = require('jsonwebtoken');

async function authenticationMiddleware(req,res, next){
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        res.status(401).json({msg:'token not provided'})
    }

    const token = authHeader.split(' ')[1];
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const {id, username} = decoded;
        req.user = { id, username }
        next()
    }
    catch(error){
        res.status(401).json({msg: 'no access to this route'});
    }
}

module.exports = authenticationMiddleware
