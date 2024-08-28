const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const router = express.Router();

//sign up route
router.post('/signup', async(req, res) => {
    const{username, password} = req.body;

    try{
        // Check if same name already exists
        let user = await User.findOne({username});
        if(user){
            return res.status(400).json({success: false, message: "User already exists"});
        }

        // If name is unique
        user = new User({
            username,
            password: await bcrypt.hash(password, 10),
        });

        await user.save();
        res.json({success:true, message: "User registered successfully"});
    }
    catch (error){
        console.log(error);
        res.status(500).json({success:false, message:'Server error'});
    }
})
//login route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ success: false, message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ success: false, message: 'Invalid credentials' });

    res.json({ success: true, message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
