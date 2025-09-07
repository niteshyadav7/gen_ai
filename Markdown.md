                          LLMs
               (Large Language Models)
                        │
 ┌──────────────────────┼──────────────────────┐
 │                      │                      │
What?                Examples               How?
(Definition)         (Companies)            (Working)
 │                      │                      │
- Trained on        - GPT (OpenAI)        - Learn patterns
  huge text         - Gemini (Google)       from text
- Predict next      - Claude (Anthropic)  - Predict "next word"
  word → build      - LLaMA (Meta)        - Repeat → full text
  sentences
 │
 ┌─────────────┐
 │  Uses       │
 └─────────────┘
- Answer Qs
- Write content
- Summarize
- Translate
- Chatbots
- Research help

Analogy:
LLM = person who read all books 📚 → 
then answers based on memory


```
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Example function to get a response
async function main() {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",   // You can use "gpt-4.1" or "gpt-3.5-turbo"
      messages: [{ role: "user", content: "Hello, how are you?" }]
    });

    console.log(response.choices[0].message.content);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();

```

```
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

main(` return them in JSON only.

Text: "Find all data of MS Dhoni"

Return format:
{
  "name": string,
  "profession": string,
  "location": string,
  "company": string,
  "since": number
}
`);

```