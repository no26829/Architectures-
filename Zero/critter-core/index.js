const express = require("express");
const axios = require("axios");
const app = express();
app.use(express.json());

// handle request and send to shared-state-service
app.post("/feed", async (req, res) => {
  const { userId, newHungerLevel } = req.body;

  try {
    await axios.post("http://shared-state-service:4005/update", {
      event: "hunger-update",
      data: { userId, newHungerLevel }
    }, {
      headers: { Authorization: "Bearer securetoken123" }
    });
    res.json({ message: "sent" });
  } catch (err) {
    res.status(500).json({ error: "fail" });
  }
});

app.listen(4000 + Math.floor(Math.random() * 1000), () => {
  console.log("feed service running");
});