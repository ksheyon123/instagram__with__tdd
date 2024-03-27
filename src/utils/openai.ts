import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_SECRET_KEY });

const model = "gpt-3.5-turbo-0125";
export const textGeneration = async () => {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "Hi! y'all! What is your name?" }],
    model: model,
    n: 2,
  });
  console.log(completion.choices);
  return completion;
};

export const vision = async (base64) => {
  const response = await openai.chat.completions.create({
    model: model,
    messages: [
      {
        role: "user",
        content: [
          { type: "text", text: "What’s in this image?" },
          {
            type: "image_url",
            image_url: {
              url: `data:image/jpeg;base64,${base64}`,
            },
          },
        ],
      },
    ],
  });

  console.log(response.choices);
};
