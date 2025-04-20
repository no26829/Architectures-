// hunger logic
const { saveHunger } = require("../data/hunger")

const updateHunger = (userId, hungerLevel) => {
  saveHunger(userId, hungerLevel)
  return "hunger updated"
}

module.exports = { updateHunger }