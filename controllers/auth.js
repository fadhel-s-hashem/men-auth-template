const home = (req, res) =>{
    res.send('Welcome to the app!')
}

const showSignUpForm = (req, res) => {
    res.render('auth/sign-up.ejs')
}

module.exports = {
    home, showSignUpForm,
}