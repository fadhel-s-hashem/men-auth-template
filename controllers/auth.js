const User = require('../models/user')

const home = (req, res) =>{
    res.send('Welcome to the app!')
}

const showSignUpForm = (req, res) => {
    res.render('auth/sign-up.ejs')
}

const signUP = async (req,res)=> {
    console.log(req.body)

    // to check if there user in data base
    const userInDatabase = await User.findOne({
        username: req.body.username
    })
    if (userInDatabase) {
        return res.send('Username already taken.')
    }

    let userData ={}
    userData.username = req.body.username
    userData.password = req.body.password



    const user = await User.creat(userData)
    res.send('user')
}

module.exports = {
    home, 
    showSignUpForm,
    signUP,
}