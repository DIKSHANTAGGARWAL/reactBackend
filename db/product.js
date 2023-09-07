const mongoose=require ('mongoose');

const userSchema=new mongoose.Schema({
    name: String,
    price:String,
    category:String,
    userId:String,
    votes:{type:Number, defaultValue:0}
});

module.exports=mongoose.model("candidates",userSchema);