// fake db save for xp
const saveXP = (userId, amount) => {
  console.log(`saved xp for ${userId}: ${amount}`)
}

module.exports = { saveXP }