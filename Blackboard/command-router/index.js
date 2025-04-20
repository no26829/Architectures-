const express = require("express");
const axios = require("axios");
const app = express();
app.use(express.json());

// Proxy to get blackboard state
app.get("/blackboard", async (req, res) => {
  try {
    const response = await axios.get("http://blackboard-service:4005/state");
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "fail" });
  }
});

app.listen(4000, () => {
  console.log("router on 4000");
});