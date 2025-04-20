const express = require("express");
const axios = require("axios");
const app = express();
app.use(express.json());

// handle request and send to shared-state-service
app.post("/login", async (req, res) => {
  const { userId } = req.body;

  try {
    await axios.post("http://shared-state-service:4005/update", {
      event: "user-login",
      data: { userId }
    }, {
      headers: { Authorization: "Bearer securetoken123" }
    });
    res.json({ message: "sent" });
  } catch (err) {
    res.status(500).json({ error: "fail" });
  }
});

app.listen(4000 + Math.floor(Math.random() * 1000), () => {
  console.log("login service running");
});