const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
    return jwt.sign({ id }, "dolly123", { expiresIn: maxAge });
};

module.exports.signup_post = async (req, res) => {
    const salt = await bcrypt.genSalt();
    const newUser = req.body;
    newUser.password = await bcrypt.hash(newUser.password, salt);
    try {
        const user = await User.create(newUser);
        const token = createToken(user._id);
        console.log(token);
        // res.cookie('jwt',token,{httpOnly:true,maxAge:maxAge*1000});
        res.status(201).json({message:'user created', user: user._id });
    } catch (err) {
        // const errors= handleErrors(err);
        console.log(err);
        res.status(400).json({message:'unable to create user'})
    }
};
module.exports.login_post = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            console.log("not found");
            res.send({ error: "Invalid email or password" });
            return;
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            res.send({ error: "Invalid credentials" });
        } else {
            const token = createToken(user._id);
            res.status(201).json({message:'Logged In Successfully' , token: token });
        }
    } catch (err) {
        // const errors = handleErrors(err);
        res.status(400).json({message:'Error logging In' ,error: err.message });
    }

    // res.send('userLogin');
};
