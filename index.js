// gemini-2.5-flash

const genai = require("@google/genai");
const dotenv = require("dotenv");
dotenv.config();

// create instance
const ai = new genai.GoogleGenAI({ apiKey: process.env.API_KEY });

const main = async function (prompts) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompts,
    });
    console.log(response.text);
  } catch (err) {
    console.log(err.message);
  }
};

main(` Joke
`);
