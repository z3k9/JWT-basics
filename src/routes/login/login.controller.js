// check username, password in post(login) request.
// if exist create new JWT
// send back to front-end

// setup authentication so only the request with JWT can access the dashboard.
const jwt = require('jsonwebtoken');

async function login(req, res){
    const token = jwt.sign()
    const {username, password }= req.body;
    // mongo
    // Joi
    // check in the controller 

    if(!username || !password){
        throw new CustomAPIError('Please provide email and password', 400)
    }

    return res.status(200).send('Fake Login/Register/Signup Route');
}

async function dashboard(req,res){
    const luckyNumber = Math.floor(Math.random()*100);
    return res.status(200).json({msg: `Hello, John Doe`, secret:`Here is your authorized data, your lucky number is ${luckyNumber}`});
}

module.exports = { login, dashboard };