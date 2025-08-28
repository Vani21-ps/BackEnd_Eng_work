const jwt = require("jsonwebtoken");

const isLogin = (req, res, next) => {
    try {
        // Header se token nikaalo
        const authHeader = req.headers["authorization"];
        if (!authHeader) {
            return res.status(401).json({
                success: false,
                message: "Authorization header missing"
            });
        }

        // "Bearer <token>" format hota hai
        const token = authHeader.split(" ")[1];
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Token missing"
            });
        }

        // Token verify karo
        const decoded = jwt.verify(token, "SECRET_KEY"); // same key jo login me use kiya
        req.userId = decoded.userId; // userId ko request object me set kar diya
        next(); // next route handler call karo
    } catch (err) {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token"
        });
    }
};

module.exports = isLogin;