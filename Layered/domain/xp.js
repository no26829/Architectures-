// xp logic
const { saveXP } = require("../data/xp")

const logXP = (userId, amount) => {
  saveXP(userId, amount)
  return "xp logged"
}

module.exports = { logXP }