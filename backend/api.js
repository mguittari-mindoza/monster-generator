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

  try {
  
    const image = await openai.images.generate({
      model: "dall-e-3",
      prompt: `A full-body view monster with a ${settings.color} color and a ${settings.size} size, holding a ${settings.weapon}. The creature stands in a vibrant and whimsical ${settings.decor} environment. The illustration is in a clean, expressive cartoon style — with bold lines, exaggerated features, and bright colors. The mood is fun and fantastical. No text.`

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
