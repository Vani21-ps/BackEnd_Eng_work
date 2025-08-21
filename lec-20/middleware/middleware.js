function m1(req, res,next) {
    console.log("running Middleware 1");
    req.user={
        id:1,
        username:"vani"
    }
     next();
}
function m2(req, res,next) {
console.log("running Middleware 2");
console.log(req.user);
   // req.isAdmin = true;
    next();
}
function checkAdmin(req, res, next) {
   let {name} = req.query;
    if(name == "admin") {
        req.isAdmin = true;
        return next();
    }
    console.log("running checkAdmin Middleware");
    res.json({
        success: false,
        message: "not authorised"
    })
}
function isLogin(req, res, next) {
    console.log("running isLogin Middleware");
  next();
}
module.exports.m1 = m1;
module.exports.m2 = m2;
module.exports.checkAdmin = checkAdmin;
module.exports.isLogin = isLogin;