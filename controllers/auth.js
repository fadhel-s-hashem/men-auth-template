const User = require('../models/user')
const bcrypt = require('bcrypt')

const home = (req, res) =>{
    res.send('Welcome to the app!')
}

const showSignUpForm = (req, res) => {
    res.render('auth/sign-up.ejs')
}

const signUp = async (req, res) => {
    const userInDatabase = await User.findOne({
        username: req.body.username
    })

    if (userInDatabase) {
        return res.send('Username already taken.')
    }

    let userData = {}
    userData.username = req.body.username

    const hashedPassword = bcrypt.hashSync(req.body.password, 10)
    userData.password = hashedPassword

    const user = await User.create(userData)
    res.send(user)
}

const showSignInForm = (req, res) =>{
    res.render('auth/sign-in.ejs')
}

const signIn = async (req, res) =>{
    console.log(req.body)
    res.send('sign in route')
}

module.exports = {
    home, 
    showSignUpForm,
    signUp,
    showSignInForm,
    signIn,

}