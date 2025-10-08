import jwt from 'jsonwebtoken';

//function to authorize user 
function userAuth(req, res, next) {
    const {token} = req.headers;
    if(!token) {
        res.json({success: false, message: "Not Authorized, Login Again"});
    }

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        // console.log(decodedToken.id);
        if(decodedToken.id) {
            //set id in the body for userCredit route-function
            req.body.userID = decodedToken.id;
            
        }
        else{
            return res.json({success: false, message: "Not Authorized, Login Again"});
        }
        next();

    } catch (error) {
        return res.json({success: false, message: error.message});
    }
}

export default userAuth;