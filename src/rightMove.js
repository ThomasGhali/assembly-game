export default function getGoodJobText() {
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