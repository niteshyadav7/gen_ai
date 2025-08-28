// LLM:Large Language Model:->>>LLMs = giant pattern prediction machines trained on huge text data.
/**
 * Basically LLM is model which predicts the next things.Under the hood it breaks the words into the tokens.
 * Then , these tokens are get converted into vectors (means number).Then Based on the Pattern it's predicts
 * data OR anythings.Because these LLM's are trainded by Trillions of data.
 * eg:suppose a librarian ,who have the idea which books it where.
 */

/**
 * Tokens → vectors
 * Q, K, V (Queries, Keys, Values)
 * Scores → Softmax → Weighted mix
 * Multi-head = multiple perspectives
 */

// Neural Network  ::A neural network is a layered system of math functions that learns patterns from data, instead of being explicitly programmed.

// Input Layer   →   Hidden Layers   →   Output Layer

/**
 *           You type something (Prompt)
                   │
                   ▼
          [1] Tokenization
     (Words/sentences → numbers)
                   │
                   ▼
          [2] Embeddings
   (Numbers turned into "meaningful vectors")
                   │
                   ▼
          [3] Transformer Model
   ┌─────────────────────────────────┐
   │ Layers of "attention blocks"    │
   │ They look at:                   │
   │   • context (previous words)    │
   │   • relationships between words │
   │   • probabilities of next word  │
   └─────────────────────────────────┘
                   │
                   ▼
          [4] Next Word Prediction
   (Model guesses the most likely word)
                   │
                   ▼
          [5] Generated Output
   "Here’s the answer!" → back to text

 */

//  syntax to run Nodejs using openai

/**
import OpenAI from "openai";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function multimodalDemo() {
  // 1. TEXT GENERATION
  const textRes = await client.responses.create({
    model: "gpt-4o-mini",
    input:
      "Write a short fantasy story (3 sentences) about a dragon and a robot exploring a hidden cave.",
  });

  const story = textRes.output[0].content[0].text;
  console.log("\n📖 STORY:\n", story);

  // 2. IMAGE GENERATION
  const imgRes = await client.images.generate({
    model: "gpt-image-1",
    prompt:
      "An artistic illustration of a dragon and a robot exploring a glowing cave",
    size: "512x512",
  });

  const imgUrl = imgRes.data[0].url;
  console.log("\n🖼️ IMAGE URL:", imgUrl);

  // Download the image to file
  const response = await fetch(imgUrl);
  const buffer = Buffer.from(await response.arrayBuffer());
  fs.writeFileSync("dragon_robot.png", buffer);
  console.log("🖼️ Saved dragon_robot.png");

  // 3. AUDIO NARRATION
  const audioRes = await client.audio.speech.create({
    model: "gpt-4o-mini-tts",
    voice: "alloy",
    input: story,
  });

  const audioBuffer = Buffer.from(await audioRes.arrayBuffer());
  fs.writeFileSync("narration.mp3", audioBuffer);
  console.log("🎧 Saved narration.mp3");
}

multimodalDemo();
 */

//  Seperately:

import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

export const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// 🔹 1. Text Generator (Responses API)

import { client } from "./openai.js";

async function textGen() {
  const res = await client.responses.create({
    model: "gpt-4o-mini",
    input: "Write a short motivational quote about learning.",
  });

  console.log(res.output[0].content[0].text);
}

textGen();

// 🔹 2. Image Generator
import { client } from "./openai.js";
import fs from "fs";

async function imageGen() {
  const res = await client.images.generate({
    model: "gpt-image-1",
    prompt: "A futuristic city skyline at sunset, cyberpunk style",
    size: "1024x1024",
  });

  const url = res.data[0].url; // hosted image
  console.log("Image URL:", url);

  // Optionally download as file
  const img = await fetch(url);
  const buffer = Buffer.from(await img.arrayBuffer());
  fs.writeFileSync("city.png", buffer);
}

imageGen();

// 🔹 3. Embeddings (turn text → vector numbers)
import { client } from "./openai.js";

async function embeddings() {
  const res = await client.embeddings.create({
    model: "text-embedding-3-small",
    input: "Neural networks are fascinating.",
  });

  console.log("Vector length:", res.data[0].embedding.length);
}

embeddings();

// 🔹 4. Audio (Text → Speech)

import { client } from "./openai.js";
import fs from "fs";

async function tts() {
  const res = await client.audio.speech.create({
    model: "gpt-4o-mini-tts",
    voice: "alloy",
    input: "Hello from Node.js!",
  });

  const buffer = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync("speech.mp3", buffer);
  console.log("Saved speech.mp3");
}

tts();

// 🔹 5. Audio (Speech → Text / Transcription)

import { client } from "./openai.js";
import fs from "fs";

async function transcribe() {
  const res = await client.audio.transcriptions.create({
    model: "gpt-4o-transcribe",
    file: fs.createReadStream("speech.mp3"),
  });

  console.log("Transcript:", res.text);
}

transcribe();

// 🔹 6. Streaming Text

import { client } from "./openai.js";

async function streamText() {
  const stream = await client.responses.stream({
    model: "gpt-4o-mini",
    input: "Write a short story, streaming word by word.",
  });

  for await (const event of stream) {
    if (event.type === "response.output_text.delta") {
      process.stdout.write(event.delta);
    }
  }
}

streamText();

// Note:
// .create() → waits, then prints the whole answer.
// .stream() → prints piece by piece as it comes.

/**
Text generator → responses.create

Image generator → images.generate

Embeddings → embeddings.create

Audio TTS → audio.speech.create

Audio transcription → audio.transcriptions.create

Streaming → responses.stream
 */

// Prompt Engineering Recap

/**
Zero-shot → “Do this.”
No examples, just instructions.
→ Example: Translate: "The weather is nice today."

Few-shot → “Do this, here’s how.”
Give a few examples, the model copies the pattern.
→ Example: show a couple of English→French pairs, then ask it to continue.

Role-based → “Pretend you’re X and do this.”
Sets style, tone, or perspective.
→ Example: You are a French teacher / travel guide / comedian — explain the phrase. */

/**
⚡ Quick reinforcement:

Zero-shot = no examples, just instructions.

Few-shot = give examples, ask it to continue.

Role-based = assign an identity/persona. 

 */

// PROJECTS:
// 📝 AI Blog Generator → Generate articles from a topic.
// 📧 AI Email Assistant → Draft professional emails.
// 🌍 AI Translator / Code Helper → Translate text/code.
