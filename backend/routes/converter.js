const express = require("express");
const app = express();
const axios = require("axios");
const converter = express.Router();
require("dotenv").config();
const codeModel = require("../model/codeModel");

app.use(express.json());

const MyKey = process.env.MY_API_KEY;

converter.post("/convert", async (req, res) => {
  try {
    const { code, generatedLanguage } = req.body;
    const response = await axios.post(
      "https://api.openai.com/v1/engines/text-davinci-003/completions",
      {
        prompt: `Translate the following code ${code} into ${generatedLanguage}`,
        max_tokens: 400,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${MyKey}`,
        },
      }
    );

    const translatedCode = response.data.choices[0].text;

    const generated = new codeModel({
      code,
      generatedLanguage,
      generatedCode: translatedCode,
    });

    await generated.save();

    res.status(200).json({ translatedCode });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = converter;
