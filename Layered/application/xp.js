// handles logic for XP
const { logXP } = require("../domain/xp")

const handleXP = (req, res) => {
  const { userId, amount } = req.body
  const result = logXP(userId, amount)
  res.json({ message: result })
}

module.exports = { handleXP }