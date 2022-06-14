const mongoose=require('mongoose')

const todo=new mongoose.Schema({
    title:{type:String, required:true},
    checked: {type:Boolean,default:false}
})

const Schema=new mongoose.Schema({
    user:{type:String, required:true},
    password:{type:String, required:true},
    todo: [todo]
})

const model=mongoose.model("user",Schema)
module.exports=model