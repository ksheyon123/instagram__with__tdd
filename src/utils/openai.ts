import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_SECRET_KEY });

const model = "gpt-3.5-turbo-0125";
export const textGeneration = async (
  messages: any[] = [
    { role: "system", content: "강아지가 자는 모습이 너무 귀여워요!!😍" },
  ]
) => {
  const completion = await openai.chat.completions.create({
    messages: messages, //[{ role: "system", content: "Hi! y'all! What is your name?" }],
    model: model,
    n: 4,
  });
  const choices = completion.choices;
  return choices;
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
