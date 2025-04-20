// handles logic for feed
const { updateHunger } = require("../domain/hunger")

const handleFeed = (req, res) => {
  const { userId, newHungerLevel } = req.body
  const result = updateHunger(userId, newHungerLevel)
  res.json({ message: result })
}

module.exports = { handleFeed }