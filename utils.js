import OpenAI from "openai";
import dotenv from "dotenv";
import { stdin as input, stdout as output} from 'node:process';
import * as readline from 'node:readline/promises';

dotenv.config();
const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

export async function getStream(messages) {

    let finalResponse = '';

    try {
        const responseStream = await openai.chat.completions.create({
            messages: messages,
            model: "gpt-4.1-nano",
            stream: true
        });

        for await (const part of responseStream) {
            const delta = part.choices[0].delta;
            if (delta && delta.content) {
                await new Promise(resolve => setTimeout(resolve, 30));
                process.stdout.write(delta.content);
                finalResponse += delta.content;
            }
        }

    } catch (error) {
        console.error("Ein Fehler ist aufgetreten:", error.message);
        return "Es gab einen Fehler bei der Generierung der Geschichte.";
    }

    return finalResponse;
    
}

export function promptUser(question) {
    const rl = readline.createInterface({ input, output});
    return rl.question(question).finally(() => rl.close());
}