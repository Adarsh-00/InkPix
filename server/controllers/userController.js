import userModel from "../models/UserModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

//create user
export const registerUser = async (req, res) => {

    try {
        const { username, email, password } = req.body;
        if(!username || !email || !password) {
            return res.json({success: false, message: "missing details"});
        }
    
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
    
        const userDetails = { username, email, password: hashedPassword };
        const newUser = new userModel(userDetails);
        const user = await newUser.save();
    
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({success: true, token, user: {username: user.username}});

    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message});
    }
};

//Login user
export const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await userModel.findOne({email});
    
        if(!user) {
            res.json({success: false, message: "User does not exist"});
        }
    
        const checkPass = await bcrypt.compare(password, user.password);
        if(checkPass) {
    
            const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({success: true, token, user: {username: user.username}});
    
        } else {
            res.json({success: false, message: "Invalid Credentials"});
        }
        
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message});
    }
};

//show credits user have
export const userCredit = async (req, res) => {
    try {
        const {userID} = req.body;
        const user = await userModel.findOne({_id: userID});
        res.json({success: true, credit: user.creditBalance, user: {name: user.username}});

    } catch (error) { 
        console.log(error);
        res.json({success: false, message: error.message});
    }
}

