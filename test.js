// // const args = process.argv.slice(2)[0];

// // for (let i = 0; i < args.length; i++) {
// //   console.log(args[i]);
// // }

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// // rl.question("Enter something : ", (name) => {
// //   console.log(name);
// //   rl.close();
// // });
// rl.on("line", (query) => {
//   if (query.trim().toLowerCase() === "exit") {
//     console.log("Goodbye 👋");
//     rl.close(); // ✅ only close when user types exit
//   } else {
//     console.log("You typed:", query);
//   }
// });

const readline = require("readline");
const genai = require("@google/genai");
const dotenv = require("dotenv");
dotenv.config();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const ai = new genai.GoogleGenAI({ apiKey: process.env.API_KEY });

async function main(prompts) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Tell me about ${prompts} in 100 words.`,
    });
    console.log(response.text);
  } catch (err) {
    console.log(err);
  }
}

rl.question("Enter the PROMPT : ", (query) => {
  main(query);
  rl.close();
});
