import OpenAI from "openai";

const openai = new OpenAI({
    apiKey:process.env.OPENSI_API_KEY,
})

export default openai;