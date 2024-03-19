import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_SECRET_KEY });

export const main = async () => {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
};
