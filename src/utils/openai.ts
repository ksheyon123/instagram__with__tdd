import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_SECRET_KEY });

export const main = async () => {
  const sampleData = [
    { role: "system", content: "Hi! y'all! What is your name?" },
  ];
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "Hi! y'all! What is your name?" }],
    model: "gpt-3.5-turbo",
    n: 2,
  });

  return completion;
};
