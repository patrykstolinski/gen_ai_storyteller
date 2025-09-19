import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();
const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY})


export class StorytellerAgent{

    constructor(persona, storyline) {
        this.persona = persona;
        this.storyline = [storyline];
    }

    async continueStory(userPrompt) {
        const messages = [
            { role: "system", content: this.persona },
            { role: "user", content: `Setze das folgende Märchen fort. Der bisherige Teil lautet: "${this.storyline.join(' ')}". Der Zuhörer möchte, dass du: "${userPrompt}". Schreibe 3 bis 5 Sätze, erzähle die Geschichte weiter und baue eine überraschende Wendung in die Handlung ein. Achte darauf, dass die Wendung kreativ und unerwartet ist, ohne die bisherigen Ereignisse unlogisch zu machen.` }
        ];

        const completion = await openai.chat.completions.create({
            messages: messages,
            model: "gpt-4.1-nano"
        });
        console.log(completion.choices[0])
    }

}