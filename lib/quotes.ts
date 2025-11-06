export interface Quote {
  text: string;
  author: "Stalin" | "Adams";
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
  // Eric Adams quotes (NYC Mayor)
  {
    text: "Don't tell me about no danger. I'm a black man in America. I was born in danger.",
    author: "Adams",
    authorFull: "Eric Adams"
  },
  {
    text: "I am the face of the new Democratic Party.",
    author: "Adams",
    authorFull: "Eric Adams"
  },
  {
    text: "I'm going to have some fun as your mayor, and we're going to get stuff done.",
    author: "Adams",
    authorFull: "Eric Adams"
  },
  {
    text: "Stop the violence. Put the guns down. We're not going to take our city back by using more violence.",
    author: "Adams",
    authorFull: "Eric Adams"
  },
  {
    text: "New York is the center of the universe. If you can make it here, you can make it anywhere.",
    author: "Adams",
    authorFull: "Eric Adams"
  },
  {
    text: "I'm not going to allow people to come into our city and destroy our city.",
    author: "Adams",
    authorFull: "Eric Adams"
  },
  {
    text: "Low-skill workers, they're all migrating to Tampa. The high-skill people are coming to New York.",
    author: "Adams",
    authorFull: "Eric Adams"
  },
  {
    text: "We need to make sure that this city is run like a business.",
    author: "Adams",
    authorFull: "Eric Adams"
  },
  {
    text: "I'm not going to be a traditional mayor. I'm going to be the cool mayor.",
    author: "Adams",
    authorFull: "Eric Adams"
  },
  {
    text: "Swagger is my M.O. I have a different approach to governing.",
    author: "Adams",
    authorFull: "Eric Adams"
  },
];

export function getRandomQuote(excludeIndex?: number): { quote: Quote; index: number } {
  let index: number;

  do {
    index = Math.floor(Math.random() * quotes.length);
  } while (index === excludeIndex);

  return { quote: quotes[index], index };
}
