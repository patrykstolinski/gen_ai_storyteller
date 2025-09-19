import { StorytellerAgent } from "./agent.js";

const persona = "Du bist ein sanfter, kreativer Märchen-Erzähler für Kindergeschichten. Du verwendest einfache, positive Sprache. Deine Aufgabe ist es, ein interessantes Gute-Nacht-Märchen zu erzählen, das das Kind beruhigt.";
const storyline = "Es war einmal ein kleiner verlorener Teddybär, der einsam im Wald saß.";

const agent = new StorytellerAgent(persona, storyline);

agent.continueStory("");