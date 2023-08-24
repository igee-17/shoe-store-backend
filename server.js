const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");

// Initialize Firebase Admin SDK
const serviceAccount = require("./config/serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post("/api/users", async (req, res) => {
  try {
    const userData = req.body;
    const usersCollection = admin.firestore().collection("users");
    await usersCollection.add(userData);
    console.log('user created successfully');
    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/api/store", async (req, res) => {
  try {
    const cartData = req.body; // Assuming the cart data is sent in the request body
    const userId = "unique_user_id"; // Replace with the actual user ID

    // Get a reference to the Firestore collection for the user's cart data
    const cartCollectionRef = admin.firestore().collection("users").doc(userId).collection("cart");

    // Store the cart data in the Firestore collection
    await cartCollectionRef.add(cartData);

    res.status(200).send("Cart data stored successfully");
  } catch (error) {
    console.error("Error storing cart data:", error);
    res.status(500).send("An error occurred while storing cart data");
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
