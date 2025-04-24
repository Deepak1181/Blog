
 const bcrypt= require("bcryptjs")
 const jwt = require("jsonwebtoken")
 const User = require("../../models/User")


//  register

const registerUser = async(req,res)=>{
 const {userName,email,password} = req.body;
//  

try {
    // 12 is salt no
    const hashPassword = await bcrypt.hash(password,12)
     const newUser = new User ({userName,email, password:hashPassword})
    //   save to database
     await newUser.save()

     res.status(200).json({
        success:true,
        message:"registration successfull"
    })
 } catch (error) {
    console.log(error)
    res.status(500).json({
        success:false,
        message:"Some error occured"
    })
}

}








// login

const login =async(req,res)=>{
    try {
        
    } catch (error) {
        console.log(error)
        res.send(500).json({
            success:false,
            message:"Some error occured"
        }) 
    }
}




// logout











// middleware









module.exports ={registerUser}