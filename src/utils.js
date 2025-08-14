import { words } from "./words";

export function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)].toUpperCase();
}

// returns a random motivational message
export function getGoodJobText() {
  const options = [
    "Nice hit! You're on fire!",
    "Bullseye! Keep rolling",
    "One step closer, champ",
    "Brilliant! Brain juices",
    "You cracked it!",
    "Right on! Victory dance",
    "Nice brain flex",
    "Smart move, commander",
    "Another notch for you",
    "Yes! That letter bowed out",
    "Puzzle power!",
    "You found a clue!",
    "Keep the streak alive",
    "That was pure skill",
    "One less mystery",
    "Legends call this move",
    "You sniffed it out!",
    "Gold star awarded",
    "Byte-sized victory",
    "You're on a roll!",
    "Sharp eyes, nice pick",
    "Correct! Applause!",
    "Victory nibble",
    "You saved a byte!",
    "Own that letter!",
    "Champion of chars",
    "Legendary guess!",
    "Bravissimo!",
    "Tiny win, big flex",
    "Nice — nailed it!"
  ];

  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

// returns a random farewell message
export function getFarewellText(language) {
  const options = [
    `Farewell, ${language}`,
    `Adios, ${language}`,
    `R.I.P. ${language}`,
    `We'll miss ${language}`,
    `Oh no, ${language}!`,
    `${language} bites the dust`,
    `Gone, ${language}`,
    `${language} unplugged`,
    `${language} has expired`,
    `Off you go, ${language}`,
    `${language}, it's curtains`,
    `${language} is history`,
    `${language} signed off`,
    `${language} left us`,
    `${language} fades away`,
    `Goodbye, ${language}`,
    `${language} -> null`,
    `${language} got nuked`,
    `${language} met its end`,
    `${language} went dark`,
    `${language} disintegrated`,
    `${language} lost power`,
    `${language} was deprecated`,
    `${language} is toast`,
    `${language} vanished`,
    `${language}: game over`,
    `${language} turned to dust`,
    `${language} took a bow`,
    `${language} fell silent`,
    `${language} has sailed off`
  ];

  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}