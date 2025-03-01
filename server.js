require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Dice Roll API
app.get("/roll", (req, res) => {
  const numDice = parseInt(req.query.count) || 5;
  const sides = parseInt(req.query.sides) || 6;

  if (sides < 2 || numDice < 1) {
    return res.status(400).json({ error: "Invalid dice parameters" });
  }

  const rolls = Array.from(
    { length: numDice },
    () => Math.floor(Math.random() * sides) + 1
  );
  res.json({ rolls });
});

// Wake-up API
app.get("/wake-up", (req, res) => {
  res.json({ message: "Server is awake!" });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Dice Roller API is running on port ${PORT}`);
});
