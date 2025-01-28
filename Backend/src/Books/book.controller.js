const Book = require("./book.model");
const mongoose = require('mongoose');



const postABook=async (req, res) => {
  try {
    const newBook = new Book({ ...req.body }); // Correct way to create a Mongoose instance
    await newBook.save();
    res.status(200).send({ message: "Book Created Successfully", book: newBook });
  } catch (error) {
    console.error("Error in Creating the Book:", error.message);
    res.status(500).send({ message: "Failed to Create Book", error: error.message });
  }
}

//get all books

// get all books
const getAllBooks =  async (req, res) => {
  try {
      const books = await Book.find().sort({ createdAt: -1});
      res.status(200).send(books)
      
  } catch (error) {
      console.error("Error fetching books", error);
      res.status(500).send({message: "Failed to fetch books"})
  }
}



// get single Book
const getSingleBook=async(req,res)=>{
  try {
  
   const {id}=req.params;
   const book=await Book.findById(id);

   if(!book){
    res.status(404).send({message:"Book Not Found"})

   }
   res.status(200).send(book);
    
  } catch (error) {
    console.error("error in getting the book",error);
    res.status(500).send({message:"failed to get the book"})

  }
}


// Update the Book

const UpdateBook=async(req,res)=>{
  try {
    const {id} =req.params;
    const UpdatedBook=await Book.findByIdAndUpdate(id,req.body,{new:true});
    if(!UpdatedBook){
      res.status(404).send({message:'Book Not Found'})
    }

    res.status(200).send({message:"Book Updated Successfully ",book:UpdatedBook})
  } catch (error) {
    
    
    console.error("error in getting the Error ",error);
    res.status(500).send({message:"failed to Updating the book"})
  }
}

// delete Book
const deleteABook = async (req, res) => {
  try {
      const { id } = req.params;

      // Validate the id
      if (!mongoose.Types.ObjectId.isValid(id)) {
          return res.status(400).send({ message: "Invalid book ID!" });
      }

      const deletedBook = await Book.findByIdAndDelete(id);

      if (!deletedBook) {
          return res.status(404).send({ message: "Book not found!" });
      }

      res.status(200).send({
          message: "Book deleted successfully",
          book: deletedBook,
      });
  } catch (error) {
      console.error("Error deleting a book:", error);
      res.status(500).send({ message: "Failed to delete a book" });
  }
};



module.exports={postABook,getAllBooks,getSingleBook,UpdateBook,deleteABook};