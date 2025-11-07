"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getRandomQuote, type Quote } from "@/lib/quotes";
import { Star, RotateCcw, Flame } from "lucide-react";

type GameState = "playing" | "answered" | "gameOver";

export function QuoteGame() {
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [gameState, setGameState] = useState<GameState>("playing");
  const [selectedAnswer, setSelectedAnswer] = useState<"Stalin" | "Mamdani" | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  useEffect(() => {
    loadNewQuote();
  }, []);

  const loadNewQuote = () => {
    const { quote, index } = getRandomQuote(currentIndex);
    setCurrentQuote(quote);
    setCurrentIndex(index);
    setGameState("playing");
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  const handleGuess = (guess: "Stalin" | "Mamdani") => {
    if (gameState !== "playing" || !currentQuote) return;

    const correct = guess === currentQuote.author;
    setSelectedAnswer(guess);
    setIsCorrect(correct);
    setGameState("answered");
    setQuestionsAnswered((prev) => prev + 1);

    if (correct) {
      setScore((prev) => prev + 1);
      setStreak((prev) => prev + 1);
    } else {
      setStreak(0);
    }
  };

  const handleNext = () => {
    loadNewQuote();
  };

  const resetGame = () => {
    setScore(0);
    setStreak(0);
    setQuestionsAnswered(0);
    loadNewQuote();
  };

  if (!currentQuote) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  const accuracy = questionsAnswered > 0 ? Math.round((score / questionsAnswered) * 100) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 via-black to-red-950 p-4 md:p-8 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,0,0,.5) 35px, rgba(255,0,0,.5) 70px)`,
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto space-y-6 relative z-10">
        {/* Header */}
        <div className="text-center space-y-3 pt-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Star className="w-12 h-12 text-red-500 fill-red-500" />
            <h1 className="text-6xl md:text-7xl font-black tracking-tighter uppercase"
                style={{
                  background: 'linear-gradient(to bottom, #ff0000, #8b0000)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 30px rgba(255,0,0,0.3)',
                  fontFamily: 'Impact, sans-serif',
                  letterSpacing: '-0.05em'
                }}>
              STALIN<br/>OR MAMDANI?
            </h1>
            <Star className="w-12 h-12 text-red-500 fill-red-500" />
          </div>
          <p className="text-xl font-bold text-red-400 uppercase tracking-wider">
            Soviet Dictator vs NYC Mayor
          </p>
          <p className="text-sm text-gray-400 italic">
            Can you tell the difference?
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <Card className="bg-black/80 border-red-900 border-2 backdrop-blur">
            <CardHeader className="pb-2">
              <CardDescription className="text-xs text-red-400 uppercase font-bold">Score</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-black text-red-500">
                {score}/{questionsAnswered}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black/80 border-red-900 border-2 backdrop-blur">
            <CardHeader className="pb-2">
              <CardDescription className="text-xs flex items-center gap-1 text-red-400 uppercase font-bold">
                <Flame className="h-3 w-3" /> Streak
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-black text-yellow-500">{streak}</div>
            </CardContent>
          </Card>

          <Card className="bg-black/80 border-red-900 border-2 backdrop-blur">
            <CardHeader className="pb-2">
              <CardDescription className="text-xs text-red-400 uppercase font-bold">Accuracy</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-black text-green-500">{accuracy}%</div>
            </CardContent>
          </Card>
        </div>

        {/* Quote Card */}
        <Card className="bg-black/90 border-red-600 border-4 backdrop-blur shadow-2xl shadow-red-900/50">
          <CardHeader className="border-b-2 border-red-900 bg-gradient-to-r from-red-950 to-black">
            <CardTitle className="text-center text-3xl font-black text-red-500 uppercase tracking-wider">
              ⚠️ WHO SAID THIS? ⚠️
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            {/* Quote */}
            <div className="bg-gradient-to-br from-red-950/50 to-black/50 p-8 rounded-lg border-l-8 border-red-600 shadow-inner relative">
              <div className="absolute top-4 left-4 text-red-900/30 text-8xl leading-none">"</div>
              <blockquote className="text-2xl md:text-3xl font-bold leading-relaxed text-red-100 relative z-10" style={{ fontFamily: 'Georgia, serif' }}>
                {currentQuote.text}
              </blockquote>
              <div className="absolute bottom-4 right-4 text-red-900/30 text-8xl leading-none">"</div>
            </div>

            {/* Answer Feedback */}
            {gameState === "answered" && (
              <div
                className={`p-6 rounded-lg text-center font-black text-xl transition-all border-4 ${
                  isCorrect
                    ? "bg-green-950/80 text-green-400 border-green-600 shadow-lg shadow-green-900/50"
                    : "bg-red-950/80 text-red-400 border-red-600 shadow-lg shadow-red-900/50"
                }`}
              >
                {isCorrect ? (
                  <div className="space-y-2">
                    <div className="text-4xl">⭐ CORRECT! ⭐</div>
                    <div className="text-lg font-bold text-green-300 uppercase">It was {currentQuote.authorFull}</div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="text-4xl">✖ WRONG! ✖</div>
                    <div className="text-lg font-bold text-red-300 uppercase">
                      It was {currentQuote.authorFull}, not {selectedAnswer === "Stalin" ? "Joseph Stalin" : "Zohran Mamdani"}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Action Buttons */}
            {gameState === "playing" ? (
              <div className="grid grid-cols-2 gap-6">
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => handleGuess("Stalin")}
                  className="h-28 text-2xl font-black border-4 border-red-800 bg-gradient-to-br from-red-950 to-black hover:from-red-900 hover:to-red-950 text-red-200 hover:text-red-100 transition-all hover:scale-105 hover:border-red-600 shadow-lg hover:shadow-red-900/50 uppercase"
                >
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Star className="w-6 h-6 fill-red-500 text-red-500" />
                      <span>STALIN</span>
                      <Star className="w-6 h-6 fill-red-500 text-red-500" />
                    </div>
                    <div className="text-xs font-bold text-red-400 tracking-wide mt-1">Soviet Leader</div>
                  </div>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => handleGuess("Mamdani")}
                  className="h-28 text-2xl font-black border-4 border-red-800 bg-gradient-to-br from-black to-red-950 hover:from-red-950 hover:to-red-900 text-red-200 hover:text-red-100 transition-all hover:scale-105 hover:border-red-600 shadow-lg hover:shadow-red-900/50 uppercase"
                >
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Star className="w-6 h-6 fill-yellow-500 text-yellow-500" />
                      <span>MAMDANI</span>
                      <Star className="w-6 h-6 fill-yellow-500 text-yellow-500" />
                    </div>
                    <div className="text-xs font-bold text-yellow-400 tracking-wide mt-1">NYC Mayor</div>
                  </div>
                </Button>
              </div>
            ) : (
              <Button
                size="lg"
                onClick={handleNext}
                className="w-full h-16 text-2xl font-black bg-gradient-to-r from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 text-white border-4 border-red-600 uppercase tracking-wider shadow-lg hover:shadow-red-900/50 hover:scale-105 transition-all"
              >
                NEXT QUOTE →
              </Button>
            )}

            {/* Reset Button */}
            {questionsAnswered > 0 && (
              <Button
                variant="outline"
                size="sm"
                onClick={resetGame}
                className="w-full border-2 border-red-900 bg-black/50 hover:bg-red-950/50 text-red-400 hover:text-red-300 font-bold uppercase tracking-wide"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Reset Game
              </Button>
            )}
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-sm pb-8 space-y-2">
          <p className="text-red-500 font-bold uppercase tracking-wider">
            Soviet Dictator vs NYC Mayor
          </p>
          <p className="text-gray-500 text-xs italic">
            A quiz game comparing Joseph Stalin and Zohran Mamdani
          </p>
        </div>
      </div>
    </div>
  );
}
