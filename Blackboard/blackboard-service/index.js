const express = require("express");
const app = express();
app.use(express.json());

// Shared data
let blackboard = {
  petStates: {},    // hunger + mood per user
  xpLog: [],        // earned XP records
  recentEvents: []  // all events from services
};

// Get all data
app.get("/state", (req, res) => {
  res.json(blackboard);
});

// Services send updates here
app.post("/update", (req, res) => {
  const { event, data } = req.body;

  // Log the event
  blackboard.recentEvents.push({ event, data, timestamp: Date.now() });

  // If hunger update, adjust mood
  if (event === "hunger-update") {
    const { userId, hungerLevel } = data;
    blackboard.petStates[userId] = {
      ...blackboard.petStates[userId],
      hunger: hungerLevel,
      mood: hungerLevel < 30 ? "grumpy" : "okay"
    };
  }

  // If XP earned, save it
  if (event === "xp-earned") {
    blackboard.xpLog.push(data);
  }

  res.json({ message: "ok", state: blackboard });
});

app.listen(4005, () => {
  console.log("blackboard on 4005");
});