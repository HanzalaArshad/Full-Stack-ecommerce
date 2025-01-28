const Order = require("./order.model")

const createAOrder=async(req,res)=>{
      
  try {
    
    const newOrder=await Order(req.body);
    const savedOrder=await newOrder.save()

    res.status(200).json(savedOrder)

  } catch (error) {
     console.error("error creating order",error);
      res.status(500).json({message:"failed to create a order"})
  }
}

// get order by email

const getOrderByEmail=async(req,res)=>{
   try {

     const {email}=req.params;
     const orders=await Order.find({email}).sort({createdAt:-1})
     if(!orders){
      return res.status(404).json({message:"Order Not Found"})

     }

     res.status(200).json(orders);
    
   } catch (error) {
    
     console.error("error fetching the error order",error);
      res.status(500).json({message:"failed to create a order"})
   }
}

module.exports={
  createAOrder,
  getOrderByEmail
}