const express = require("express");
const applyMiddlewares = require("./middlewares/applyMiddlewares");
const connectDB = require("./DB/connectDB");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const app = express();
const port = process.env.PORT || 5000;

// Applying middlewares
applyMiddlewares(app);

// Auth Route
const authRoutes = require("./routes/Authentication/AuthRoutes");
app.use(authRoutes);

// Products route
const productRoutes = require("./routes/products/ProductRoutes");
app.use("/products", productRoutes);

// Users route
const usersRoutes = require("./routes/users/usersRoutes");
app.use("/users", usersRoutes);


// Reviews route




// Payment Intent

app.post("/create-payment-intent", async (req, res) => {
  const { price } = req.body;
  const amount = parseInt(price * 100);

  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: "usd",
    payment_method_types: ["card"],
  });
  res.send({
    clientSecret: paymentIntent.client_secret
  })
});

app.get("/health", (req, res) => {
  res.send("Tech trends is predicting trends....");
});

const main = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`Tech trends server is running on port ${port}`);
  });
};

main();
