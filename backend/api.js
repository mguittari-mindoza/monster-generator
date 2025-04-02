const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const OpenAI = require("openai");

dotenv.config();

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:5173",
    optionsSuccessStatus: 200,
  })
);

const openai = new OpenAI({
  apiKey: process.env.API_KEY,
});

app.post("/generate-image", async (req, res) => {
  const settings = req.body;

  console.log("settings ???", settings);
  try {
  
    const image = await openai.images.generate({
      model: "dall-e-3",
      prompt: `Full body view of a figurine of a fantasy monster with a ${settings.color} color and a ${settings.size} size, holding a ${settings.weapon}, placed on a tabletop roleplaying game board. The monster stands on a detailed game tile with fantasy terrain (like stone, grass, dungeon, forest, lava, etc.) and the background is immersive, matching the monster's theme and environment. Stylized like a painted miniature. No text, no captions, no watermark.`

    });

    res.json(image.data);
  } catch (error) {
    console.error("❌ Erreur OpenAI :", error);
    res.status(500).json({ error: "Erreur lors de la génération d'image." });
  }
});

app.listen(3000, () => {
  console.log("✅ Serveur backend démarré sur http://localhost:3000");
});
