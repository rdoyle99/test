# ⭐ STALIN OR MAMDANI? ⭐

## Soviet Dictator vs NYC Mayor - Can You Tell The Difference?

A bold, provocative quote guessing game that puts you to the test: Can you distinguish between quotes from **Joseph Stalin** (Soviet dictator, 1878-1953) and **Zohran Mamdani** (NYC Mayor, Democratic Socialist)?

### 🔥 The Challenge

Think you can tell communist rhetoric apart across time? This game will shock you with how similar revolutionary language sounds whether it's from 1930s Moscow or modern-day New York City.

## 🎮 Game Features

- **186 REAL QUOTES** - Massive database split evenly between Stalin and Mamdani
- **NYC meets USSR design** - Bold red/black Soviet constructivist aesthetics with NYC street attitude
- **Score tracking** - Monitor your performance in real-time
- **Streak counter** - See how many you can get right in a row
- **Accuracy percentage** - Track your overall success rate
- **Opinionated design** - No subtle grays here, just bold reds, blacks, and communist stars

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
  text: "Your revolutionary quote here",
  author: "Stalin" | "Mamdani",
  authorFull: "Joseph Stalin" | "Zohran Mamdani"
}
```

The game currently has 186 quotes (93 from each). Add more to make it even more challenging!

## 📄 License

This project is open source and available for educational and entertainment purposes.

---

**Note**: This game is for entertainment and educational purposes only. It highlights the striking similarities in revolutionary/socialist rhetoric across different time periods and contexts.

**Disclaimer**: Zohran Mamdani is an NY State Assembly member (not actually NYC Mayor, but the game presents him as such for dramatic effect).

Built with [Next.js](https://nextjs.org) • Designed with Soviet constructivist aesthetics meets NYC street style
