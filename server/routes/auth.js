const router = require("express").Router();
const passport = require("passport");

router.get("/login/success",(req,res) =>{
    if(req.user){
        res.status(200).json({
            error: false,
            message: "Successfully Loged In",
            user: req.user,
        });
    }
});

router.get("/login/failed", (req,res)=>{
    res.status(401).json({
        error: true,
        message: "Login Failure",
    })

});

router.get(
    "/google/callback",
    passport.authenticate("google",{
        successRedirect: process.env.CLIENT_DASHBOARD_URL,
        failureRedirect: "/login/failed",
    })
);

router.get("/google",passport.authenticate("google",["profile", "email"]));

router.get("/logout", (req,res)=>{
    req.logout();
    res.redirect(process.env.CLIENT_LOGIN_URL);
});

module.exports = router;