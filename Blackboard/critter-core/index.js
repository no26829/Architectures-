const express = require("express");
const axios = require("axios");
const app = express();
app.use(express.json());

// Feed pet, send hunger to blackboard
app.post("/feed", async (req, res) => {
  const { userId, newHungerLevel } = req.body;

  try {
    await axios.post("http://blackboard-service:4005/update", {
      event: "hunger-update",
      data: { userId, hungerLevel: newHungerLevel }
    });
    res.json({ message: "sent" });
  } catch (err) {
    res.status(500).json({ error: "fail" });
  }
});

app.listen(4002, () => {
  console.log("critter on 4002");
});