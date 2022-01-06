const express = require ("express");
const app = express();
const mongoose = require ("mongoose");
const dotenv = require ("dotenv");
const cors = require ("cors");
const userRoute = require ("./routes/user");
const authenticationRoute = require ("./routes/authentication");
const productRoute = require ("./routes/product");
const cartRoute = require ("./routes/cart");
const orderRoute = require ("./routes/order");
const stripeRoute = require("./routes/stripe");

dotenv.config();

mongoose
.connect(process.env.MONGO_URI)
.then (() => console.log ("DB connection successful"))
.catch ((err) => console.log (err));

app.use(express.json());

app.use(cors());

app.use("/", authenticationRoute);
app.use("/users", userRoute);
app.use("/products", productRoute);
app.use("/cart", cartRoute);
app.use("/orders", orderRoute);
app.use("/checkout", stripeRoute);


app.listen(process.env.PORT || 3005, () => {
    console.log ("Server is running")
});