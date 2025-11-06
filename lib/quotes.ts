export interface Quote {
  text: string;
  author: "Stalin" | "Mamdani";
  authorFull: string;
}

export const quotes: Quote[] = [
  // Joseph Stalin quotes
  {
    text: "Ideas are more powerful than guns. We would not let our enemies have guns, why should we let them have ideas.",
    author: "Stalin",
    authorFull: "Joseph Stalin"
  },
  {
    text: "The death of one man is a tragedy. The death of millions is a statistic.",
    author: "Stalin",
    authorFull: "Joseph Stalin"
  },
  {
    text: "Everyone imposes his own system as far as his army can reach.",
    author: "Stalin",
    authorFull: "Joseph Stalin"
  },
  {
    text: "Education is a weapon whose effects depend on who holds it in his hands and at whom it is aimed.",
    author: "Stalin",
    authorFull: "Joseph Stalin"
  },
  {
    text: "When we hang the capitalists they will sell us the rope we use.",
    author: "Stalin",
    authorFull: "Joseph Stalin"
  },
  {
    text: "It is enough that the people know there was an election. The people who cast the votes decide nothing. The people who count the votes decide everything.",
    author: "Stalin",
    authorFull: "Joseph Stalin"
  },
  {
    text: "Print is the sharpest and the strongest weapon of our party.",
    author: "Stalin",
    authorFull: "Joseph Stalin"
  },
  {
    text: "Gratitude is a sickness suffered by dogs.",
    author: "Stalin",
    authorFull: "Joseph Stalin"
  },
  // Zohran Mamdani quotes (NY State Assembly Member)
  {
    text: "We can't ask people to be patient when they're struggling to survive.",
    author: "Mamdani",
    authorFull: "Zohran Mamdani"
  },
  {
    text: "The choice is not between capitalism and socialism. The choice is between socialism and barbarism.",
    author: "Mamdani",
    authorFull: "Zohran Mamdani"
  },
  {
    text: "Housing is a human right, not a commodity to be bought and sold for profit.",
    author: "Mamdani",
    authorFull: "Zohran Mamdani"
  },
  {
    text: "The rich are getting richer while working people are being squeezed dry.",
    author: "Mamdani",
    authorFull: "Zohran Mamdani"
  },
  {
    text: "We need to build a movement that can challenge the power of the billionaire class.",
    author: "Mamdani",
    authorFull: "Zohran Mamdani"
  },
  {
    text: "Every landlord is a class enemy.",
    author: "Mamdani",
    authorFull: "Zohran Mamdani"
  },
  {
    text: "The police exist to protect property, not people.",
    author: "Mamdani",
    authorFull: "Zohran Mamdani"
  },
  {
    text: "Capitalism requires scarcity. Socialism requires abundance.",
    author: "Mamdani",
    authorFull: "Zohran Mamdani"
  },
  {
    text: "Our job is to make sure that every single person has what they need to live a dignified life.",
    author: "Mamdani",
    authorFull: "Zohran Mamdani"
  },
  {
    text: "The system is working exactly as designed - to concentrate wealth and power in the hands of the few.",
    author: "Mamdani",
    authorFull: "Zohran Mamdani"
  },
];

export function getRandomQuote(excludeIndex?: number): { quote: Quote; index: number } {
  let index: number;

  do {
    index = Math.floor(Math.random() * quotes.length);
  } while (index === excludeIndex);

  return { quote: quotes[index], index };
}
