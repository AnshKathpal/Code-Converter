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

    res.status(200).send(translatedCode);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});


converter.post("/output", async (req, res) => {
  try {
    const { code } = req.body;
    const response = await axios.post(
      "https://api.openai.com/v1/engines/text-davinci-003/completions",
      {
        prompt: `Give the output of the ${code} and also explain the code and the concepts used`,
        max_tokens: 400,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${MyKey}`,
        },
      }
    );

    const output = response.data.choices[0].text;

    const generated = new codeModel({
      code,
      generatedCode: output,
    });

    await generated.save();

    res.status(200).send(output);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});


converter.post("/debug", async (req, res) => {
  try {
    const { code } = req.body;
    const response = await axios.post(
      "https://api.openai.com/v1/engines/text-davinci-003/completions",
      {
        prompt: `Debug the code ${code}`,
        max_tokens: 400,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${MyKey}`,
        },
      }
    );

    const debugged = response.data.choices[0].text;

    const generated = new codeModel({
      code,
      generatedCode: debugged,
    });

    await generated.save();

    res.status(200).send(debugged);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

converter.post("/quality", async (req, res) => {
  try {
    const { code } = req.body;
    const response = await axios.post(
      "https://api.openai.com/v1/engines/text-davinci-003/completions",
      {
        prompt: `Do the deep quality assesment and give a brief description about the code ${code} and check if it adhere to the standard coding practices or not, and also give a brief about the concepts used in the code`,
        max_tokens: 400,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${MyKey}`,
        },
      }
    );

    const qualityCheck = response.data.choices[0].text;

    const generated = new codeModel({
      code,
      generatedCode: qualityCheck,
    });

    await generated.save();

    res.status(200).send(qualityCheck);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = converter;
