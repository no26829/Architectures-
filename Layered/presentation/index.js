// handles input/output
const express = require("express")
const app = express()
app.use(express.json())

const { handleFeed } = require("../application/feed")
const { handleXP } = require("../application/xp")

app.post("/feed", handleFeed)
app.post("/earn-xp", handleXP)

app.listen(4000, () => {
  console.log("presentation layer on 4000")
})