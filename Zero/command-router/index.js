const express = require("express");
const axios = require("axios");
const app = express();
app.use(express.json());

// fetch shared state
app.get("/blackboard", async (req, res) => {
  try {
    const response = await axios.get("http://shared-state-service:4005/state", {
      headers: { Authorization: "Bearer securetoken123" }
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "fail" });
  }
});

app.listen(4000, () => {
  console.log("router running on port 4000");
});