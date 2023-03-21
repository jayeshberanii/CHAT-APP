const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
name:{
    type:String,
    require:true
},
email:{
    type:String,
    require:true,
    unique:true
},
password:{
    type:String,
    require:true
},
age:{
    type:Number,
    require:true
},
pic:{
    type:String,
    require:true,
    default:'https://www.pngitem.com/pimgs/m/22-220721_circled-user-male-type-user-colorful-icon-png.png'
}
},{timestamps:true})

const User= mongoose.model('users',userSchema)
module.exports=User