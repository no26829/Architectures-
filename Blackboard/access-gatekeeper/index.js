const express = require("express");
const axios = require("axios");
const app = express();
app.use(express.json());

// Login user, log event to blackboard
app.post("/login", async (req, res) => {
  const { userId } = req.body;

  try {
    await axios.post("http://blackboard-service:4005/update", {
      event: "user-login",
      data: { userId, time: new Date().toISOString() }
    });
    res.json({ message: "sent" });
  } catch (err) {
    res.status(500).json({ error: "fail" });
  }
});

app.listen(4001, () => {
  console.log("gatekeeper on 4001");
});