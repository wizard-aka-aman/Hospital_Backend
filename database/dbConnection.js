import mongoose from "mongoose";
export const dbConnection =  ()=>{
    mongoose.connect("mongodb+srv://aman99280:aman99280@cluster0.1276sqe.mongodb.net/" ,{
        dbName : "MERN_STACK_HOSPITAL_MANAGEMENT_SYSTEM"
    }).then(()=>{
        console.log("Connected to databse");
    }).catch((err)=>{
        console.log(`Some error occur while connection to data base ${err}`);
    })
}

// import mongoose from "mongoose";
// export const dbConnection =  ()=>{
//     mongoose.connect("mongodb+srv://aman:aman@cluster0.q1jsqfc.mongodb.net/?retryWrites=true" ,{
//         dbName : "MERN_STACK_HOSPITAL_MANAGEMENT_SYSTEM"
//     }).then(()=>{
//         console.log("Connected to databse");
//     }).catch((err)=>{
//         console.log(`Some error occur while connection to data base ${err}`);
//     })
// }