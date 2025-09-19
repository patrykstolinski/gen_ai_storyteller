import { StorytellerAgent } from "./agent.js";
import { promptUser } from "./utils.js";

async function startStorytelling() {

    const persona = "Du bist ein sanfter, kreativer Märchen-Erzähler für Kindergeschichten. Du verwendest einfache, positive Sprache. Deine Aufgabe ist es, ein interessantes Gute-Nacht-Märchen zu erzählen, das das Kind beruhigt.";
    const storyline = "Es war einmal ein kleiner verlorener Teddybär, der einsam im Wald saß.";
    
    const agent = new StorytellerAgent(persona, storyline);

    console.log("Willkommen. Ich erzähle dir ein schönes Märchen.");
    console.log("Die Geschichte beginnt...\n");
    console.log(storyline + "\n");

    let keepGoing = true;

    while (keepGoing) {
        const userCommand = await promptUser("Was soll weiter passieren? \nz.B. 'Ein magischer Schmetterling taucht auf.'\n'Der Bär trifft einen Freund'\n oder 'Ende'\n");

        if (userCommand.toLowerCase() === "ende") {
            console.log("\nVielen Dank für das Zuhören. Gute Nacht!");
            keepGoing = false;
        } else {
            await agent.continueStory(userCommand);
            console.log("\n");    
            }
        }
    }
    

startStorytelling();

