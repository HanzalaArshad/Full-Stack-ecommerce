const express=require('express');
const { createAOrder, getOrderByEmail } = require('./order.controller');

const router=express.Router();
// order endpoints


router.post('/',createAOrder)

// get Order by useremails

router.get('/email/:email',getOrderByEmail)

module.exports=router;