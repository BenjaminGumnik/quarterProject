const mongoose = require('mongoose');
require("dotenv").config();

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_DB)
  // await mongoose.connect('mongodb://127.0.0.1:27017/quarterProject');
  console.log("mongo connect quarter project");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}