const express = require("express");
const axios = require("axios");
const app = express();
app.use(express.json());

// Earn XP, send to blackboard
app.post("/earn-xp", async (req, res) => {
  const { userId, amount } = req.body;

  try {
    await axios.post("http://blackboard-service:4005/update", {
      event: "xp-earned",
      data: { userId, amount }
    });
    res.json({ message: "sent" });
  } catch (err) {
    res.status(500).json({ error: "fail" });
  }
});

app.listen(4003, () => {
  console.log("xp on 4003");
});