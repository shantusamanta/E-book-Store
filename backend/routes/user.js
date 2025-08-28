const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {authenticateToken} = require("./userAuth");


//Sign Up
router.post("/sign-up", async (req, res) => {
    try {
        const { username, email, password, address } = req.body;

        //check username length is morethan 3
        if (username.length < 4) {
            return res
                .status(400)
                .json({ message: "Username length should be greater than 3" });
        }

        //Check username already exsits or not
        const existUsername = await User.findOne({ username: username });
        if (existUsername) {
            return res.status(400).json({ message: "Username already exsists" });
        }


        //Check email already exsits or not
        const existingEmail = await User.findOne({ email: email });
        if (existingEmail) {
            return res.status(400).json({ message: "Email already exsists" });
        }

        //check password length
        if (password.length <= 5) {
            return res
                .status(400)
                .json({ message: "Password's length should be greater than 5" });
        }
        //it uses to encrypt the password-
        const hashPass = await bcrypt.hash(password, 10);


        //if all the condition passes--
        const newuser = new User({
            username: username,
            email: email,
            password: hashPass,
            address: address,
        });
        await newuser.save();
        return res.status(200).json({ message: "SignUp Successfuly" });

    }
    catch (error) {
        res.status(500).json({ message: "Internal Server error" });
    }
});

router.post("/sign-in", async (req, res) => {
    try {
        const { username, password } = req.body;

        //check the username-
        const exsistingUser = await User.findOne({ username });
        if (!exsistingUser) {
            res.status(400).json({ message: "Invalid Credential " });
        }

        //check password
        await bcrypt.compare(password, exsistingUser.password, (err, data) => {
            if (data) {
                const authClaims = [
                    { name: exsistingUser.username },
                    { role: exsistingUser.role },
                ];
                const token = jwt.sign({ authClaims }, "bookstore123", {
                    expiresIn: "50d",
                });

                res.status(200).json({
                    id: exsistingUser.id,
                    role: exsistingUser.role,
                    token: token,
                });
            } else {
                res.status(400).json({ message: "Invalid Credential" });
            }
        });
    }
    catch (error) {
        res.status(500).json({ message: "Internal Server error" });
    }
});

//get user information
router.get("/get-user-information", authenticateToken, async (req, res) => {
    try {
        const { id } = req.headers;
        const data = await User.findById(id).select('-password');
        return res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});

router.put("/update-address", authenticateToken, async(req, res) =>{
    try{
         const { id } = req.headers;
         const { address } = req.body;
          await User.findByIdAndUpdate(id , {address: address});
          return res.status(200).json({message:"address updated succesfully"} );


    }catch(error){
        res.status(500).json({ message: "Internal Server Error" });
    }
});


module.exports = router;