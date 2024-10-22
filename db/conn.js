import { connect } from "mongoose";

const DB = process.env.DATABASE


connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));