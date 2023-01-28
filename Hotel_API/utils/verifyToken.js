import {createError} from "./../utils/error.js";
import  Jwt  from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if(!token) {
        return next(createError(401, "You are not authenticated!"));
    }

    Jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if(err) return next(createError(403,"Token is not Valid!"));
        req.user = user;
        console.log(user)
        next();
    })


};


export const verifyUser = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.user.id === req.params.id || req.user.isAdmin){
            console.log("UserId :" + user.id)
            console.log("ParamsId :" + req.params.id)
            next();
        } else{
            return next(createError(403, " You are not Authorized!"));
        }
    });
};

export const checkAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin){
            next();
        } else{
            return next(createError(403, " You are not Authorized!"));
        }
    })
}