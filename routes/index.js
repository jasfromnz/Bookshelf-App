const router = require('express').Router();
const passport = require('passport');

router.get('/', (req, res) => {
    console.log(req.user);
    res.render('index', {
        user: req.user,
    });
});

router.get('/auth/google', passport.authenticate( 'google', {
    scope: ['profile']
}));

router.get('/oauth2callback', passport.authenticate('google', {
    successRedirect: '/shelves',
    failureRedirect: '/'
}));

router.get('/logout', function(req, res) {
    req.logOut();
    res.redirect('/');
});

module.exports = router;