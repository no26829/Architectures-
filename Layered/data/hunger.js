// fake db save for hunger
const saveHunger = (userId, hungerLevel) => {
  console.log(`saved hunger for ${userId}: ${hungerLevel}`)
}

module.exports = { saveHunger }