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
const paymentRoute = require ("./routes/payment");

dotenv.config();

mongoose
.connect(process.env.MONGO_URI)
.then (() => console.log ("DB connection successful"))
.catch ((err) => console.log (err));

app.use(express.json({ extended: false }));

app.use(cors());

app.use("/", authenticationRoute);
app.use("/users", userRoute);
app.use("/products", productRoute);
app.use("/brands", productRoute);
app.use("/collection", productRoute);
app.use("/cart", cartRoute);
app.use("/orders", orderRoute);
app.use("/checkout", paymentRoute);


app.listen(process.env.PORT || 5000, () => {
    console.log ("Server is running")
});