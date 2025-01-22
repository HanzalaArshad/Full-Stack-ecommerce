const express = require('express')
const mongoose = require('mongoose');

const app = express()
require('dotenv').config()

const port = process.env.PORT || 5000;




async function main() {
  await mongoose.connect(process.env.DB_URL);
  app.use('/', (req, res) => {
    res.send('book server is running')
  })}

main().then(()=> console.log("mongodb connected") ).catch(err => console.log(err));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})