// check username, password in post(login) request.
// if exist create new JWT
// send back to front-end

// setup authentication so only the request with JWT can access the dashboard.
const jwt = require('jsonwebtoken');

async function login(req, res){
    const id = new Date().getDate();
    const {username, password }= req.body;
    // try to keep payload small, better experience for user
    const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn: '30d'});
    
    // mongo
    // Joi
    // check in the controller 

    if(!username || !password){
        return res.status(400).json({msg: 'Please provide a correct username and password'})
    }

    return res.status(200).json({msg: 'user created', token});
}

async function dashboard(req,res){
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(401).json({msg: 'token not provided'})
    }
    const token = authHeader.split(' ')[1];
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const luckyNumber = Math.floor(Math.random()*100);
        return res.status(200).json({msg: `Hello, ${decoded.username}`, secret:`Here is your authorized data, your lucky number is ${luckyNumber}`});
    } catch(error){
        return res.status(400).json({msg: 'Not authorized to access this route'});
    }
    
}

module.exports = { login, dashboard };