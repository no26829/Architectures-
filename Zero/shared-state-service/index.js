const express = require("express");
const app = express();
app.use(express.json());

// this holds shared state
let blackboard = {
  petStates: {},      // stores hunger and mood
  xpLog: [],          // stores XP events
  recentEvents: []    // stores all events
};

// check token for every request
app.use((req, res, next) => {
  const token = req.headers["authorization"];
  if (token !== "Bearer securetoken123") {
    return res.status(403).json({ error: "Unauthorized" });
  }
  next();
});

// return the full state
app.get("/state", (req, res) => {
  res.json(blackboard);
});

// update the state with new event
app.post("/update", (req, res) => {
  const { event, data } = req.body;
  blackboard.recentEvents.push({ event, data, timestamp: Date.now() });

  if (event === "hunger-update") {
    const { userId, hungerLevel } = data;
    blackboard.petStates[userId] = {
      ...blackboard.petStates[userId],
      hunger: hungerLevel,
      mood: hungerLevel < 30 ? "grumpy" : "okay"
    };
  }

  if (event === "xp-earned") {
    blackboard.xpLog.push(data);
  }

  res.json({ message: "ok", state: blackboard });
});

app.listen(4005, () => {
  console.log("shared-state-service running on port 4005");
});