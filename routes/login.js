router.post("/login", async (req, res) => {
    try {
      const userSnapshot = await db
        .collection("users")
        .where("email", "==", req.body.email)
        .get();
  
      if (userSnapshot.empty) {
        return res.status(401).json({ message: "Invalid email or password" });
      }
  
      const userDoc = userSnapshot.docs[0];
      const userData = userDoc.data();
  
      const isPasswordValid = await bcrypt.compare(
        req.body.password,
        userData.password
      );
  
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid email or password" });
      }
  
      const token = jwt.sign({ userId: userDoc.id }, "your-secret-key", {
        expiresIn: "1h",
      });
  
      res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  