const   mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  
  title:{
    type:String,
    required:true, 
  },

  description:{
    type:String,
    required:true, 
  },
  category:{
    type:String,
    required:true, 
  },
  trending:{
    type:Boolean,
    required:true,
  },
  coverImage:{
    type: String,
    required:true,
  },
  oldPrice:{
    type:Number,
    required:true,
  },
  newPrice:{
    type:Number,
    required:true
  }
   ,
  createdAt:{
    type:Date,
    default:Date.now()
  }


},{timestamps:true});
 

const Book = mongoose.model('book', BookSchema);

module.exports=Book;