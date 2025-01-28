const express = require('express')
const mongoose = require('mongoose');

const bookRoutes=require('../Backend/src/Books/book.route')
const orderRoutes=require('../Backend/src/Order/order.route')
const userRoutes=require("../Backend/src/user/user.route")
const AdminRoutes=require("../Backend/src/stats/Admin.stats")
const cors=require('cors')

const app = express()
require('dotenv').config()


const port = process.env.PORT || 5000;


app.use(express.json());
app.use(cors({
  origin:['http://localhost:5173','https://booknest-hanzala.vercel.app/'],
  credentials: true

}))


app.use('/api/books',bookRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/auth', userRoutes)
app.use('/api/admin',AdminRoutes)


async function main() {
  await mongoose.connect(process.env.DB_URL);
  app.use('/', (req, res) => {
    res.send('book server is running')
  })}

main().then(()=> console.log("mongodb connected") ).catch(err => console.log(err));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})