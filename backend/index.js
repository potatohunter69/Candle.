const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { MongoClient, ServerApiVersion } = require("mongodb");
const Product = require("./productModel"); // Ensure this path is correct
const nodemailer = require("nodemailer");
const Like = require("./likeModel");
const redis = require("redis");

const app = express();
const port = 8080;

// MongoDB Atlas connection string
const atlasConnectionString =
  "mongodb+srv://saminoorzy:samwac-Godhax-cobjy9@ecommersdb.u2t5ghz.mongodb.net/?retryWrites=true&w=majority";

// Use CORS middleware
app.use(cors());

app.use(express.json());

const redisClient = redis.createClient({
  url: "redis://default:password@localhost:6379", // Update with your Redis server configuration
});
redisClient.connect();

// Connect to MongoDB using Mongoose
mongoose
  .connect(atlasConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB Atlas with Mongoose!"))
  .catch((err) => console.error("Error connecting to MongoDB Atlas:", err));

app.get("/products", async (req, res) => {
  const cacheKey = "products";
  const cachedProducts = await redisClient.get(cacheKey);

  if (cachedProducts) {
    return res.json(JSON.parse(cachedProducts));
  }

  try {
    console.log("Fetching products from MongoDB");
    const products = await Product.find();
    await redisClient.set(cacheKey, JSON.stringify(products), {
      EX: 600, // Set expiration to 10 minutes
    });
    res.json(products);
  } catch (err) {
    console.error("Error fetching products", err);
    res.status(500).send("Error fetching products");
  }
});

const transporter = nodemailer.createTransport({
  service: "gmail", // Use your preferred email service
  auth: {
    user: "saminoorzy1@gmail.com", // Your email
    pass: "snvj wukj zops iwzy", // Your email password or app-specific password
  },
});

// Endpoint for handling form submissions
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await transporter.sendMail({
      from: email, // Sender address
      to: "saminoorzy1@gmail.com", // List of recipients
      subject: "New Contact Form Submission", // Subject line
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // Plain text body
    });

    res.send("Email sent successfully");
  } catch (error) {
    console.error("Failed to send email", error);
    res.status(500).send("Failed to send email");
  }
});

app.post("/products/:id/toggle-like", async (req, res) => {
  const { id } = req.params;
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  try {
    console.log("Toggling like state for product", id);
    const existingLike = await Like.findOne({ productId: id, ip });
    let message;
    if (existingLike) {
      await Like.findOneAndDelete({ _id: existingLike._id });
      message = "Product unliked successfully";
    } else {
      const newLike = new Like({ ip, productId: id });
      await newLike.save();
      message = "Product liked successfully";
    }

    // Invalidate cache
    await redisClient.del("products");
    await redisClient.del(`liked-products:${ip}`);

    res.json({ message });
  } catch (err) {
    console.error("Error toggling like state", err);
    res.status(500).send("Error toggling like state");
  }
});

app.get("/liked-products", async (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  const cacheKey = `liked-products:${ip}`;
  try {
    const cachedLikedProducts = await redisClient.get(cacheKey);
    if (cachedLikedProducts) {
      return res.json(JSON.parse(cachedLikedProducts));
    }

    console.log("Fetching liked products for IP from database", ip);
    const likedProducts = await Like.find({ ip }).populate("productId");
    const products = likedProducts.map((lp) => lp.productId);

    // Cache the result
    await redisClient.set(cacheKey, JSON.stringify(products), {
      EX: 600, // Set expiration to 10 minutes
    });

    res.json(products);
  } catch (err) {
    console.error("Error fetching liked products", err);
    res.status(500).send("Error fetching liked products");
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Backend server is running at http://localhost:${port}`);
  // insert products
});
