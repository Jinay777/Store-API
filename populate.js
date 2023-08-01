require("dotenv").config();
const product = require("./models/product");
const connectDb = require("./db/connect");
const jsonProducts = require("./products.json");

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    await product.deleteMany();
    await product.create(jsonProducts);
    console.log("SUCCESS");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
