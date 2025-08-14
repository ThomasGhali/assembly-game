// returns a random message
export default function getFarewellText(language) {
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