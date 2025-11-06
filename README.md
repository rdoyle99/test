# Stalin or Mamdani? 🎯

A fun and engaging quote guessing game where you try to determine whether a quote was said by Joseph Stalin or Zohran Mamdani, a Democratic Socialist NY State Assembly member.

## 🎮 About the Game

Can you tell the difference between quotes from a Soviet dictator and a modern Democratic Socialist? Test your knowledge and see if you can spot who said what! The game features:

- **Real quotes** from both Joseph Stalin and Zohran Mamdani
- **Score tracking** to monitor your performance
- **Streak counter** to see how many you can get right in a row
- **Accuracy percentage** to track your overall success rate
- **Beautiful, responsive design** built with Shadcn UI components
- **Dark mode support** for comfortable playing at any time

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm package manager

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to play!

### Build for Production

```bash
npm run build
npm start
```

## 🛠️ Tech Stack

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first CSS framework
- **Shadcn UI** - Beautiful, accessible component library
- **Lucide React** - Icon library

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main page component
│   └── globals.css     # Global styles and CSS variables
├── components/
│   ├── quote-game.tsx  # Main game component
│   └── ui/             # Reusable UI components
│       ├── button.tsx
│       └── card.tsx
├── lib/
│   ├── quotes.ts       # Quote data and helper functions
│   └── utils.ts        # Utility functions
└── components.json     # Shadcn UI configuration
```

## 🎨 Features

### Game Mechanics
- Random quote selection (no repeats in succession)
- Instant feedback on correct/incorrect answers
- Running statistics (score, streak, accuracy)
- Reset functionality to start over

### Design
- Gradient backgrounds
- Smooth transitions and hover effects
- Responsive layout for all screen sizes
- Accessible components following best practices
- Clean, modern UI with proper color contrast

## 📝 How to Play

1. Read the quote displayed on screen
2. Decide whether Joseph Stalin or Eric Adams said it
3. Click your choice
4. See if you were correct!
5. Click "Next Quote" to continue
6. Try to beat your high score and streak!

## 🤝 Contributing

Feel free to add more quotes to make the game even more challenging! Edit `lib/quotes.ts` to add new quotes following this format:

```typescript
{
  text: "Your quote here",
  author: "Stalin" | "Mamdani",
  authorFull: "Joseph Stalin" | "Zohran Mamdani"
}
```

## 📄 License

This project is open source and available for educational and entertainment purposes.

---

**Note**: This game is for entertainment and educational purposes only. It aims to highlight how political rhetoric can sound similar across different contexts and time periods.

Built with [Next.js](https://nextjs.org).
