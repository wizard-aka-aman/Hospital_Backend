export const generateToken = (user,message,statusCode,res)=>{
const token = user.generateJsonWebToken();
const cookieName  = user.role ==="Admin" ? "adminToken" : "patientToken";
    const options = {
        httpOnly: true,
        secure: true,
        sameSite: "None"
    }
res.status(statusCode).cookie(cookieName , token , options).json({
    success : true,
    message,
    user,
    token
});
}
