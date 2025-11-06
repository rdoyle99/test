"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getRandomQuote, type Quote } from "@/lib/quotes";
import { Trophy, RotateCcw, Zap } from "lucide-react";

type GameState = "playing" | "answered" | "gameOver";

export function QuoteGame() {
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [gameState, setGameState] = useState<GameState>("playing");
  const [selectedAnswer, setSelectedAnswer] = useState<"Stalin" | "Adams" | null>(null);
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

  const handleGuess = (guess: "Stalin" | "Adams") => {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-950 dark:via-blue-950 dark:to-slate-900 p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2 pt-8">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Stalin or Adams?
          </h1>
          <p className="text-lg text-muted-foreground">
            Can you tell who said it?
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <Card className="bg-white/50 dark:bg-slate-900/50 backdrop-blur">
            <CardHeader className="pb-2">
              <CardDescription className="text-xs">Score</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">
                {score}/{questionsAnswered}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/50 dark:bg-slate-900/50 backdrop-blur">
            <CardHeader className="pb-2">
              <CardDescription className="text-xs flex items-center gap-1">
                <Zap className="h-3 w-3" /> Streak
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-600">{streak}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/50 dark:bg-slate-900/50 backdrop-blur">
            <CardHeader className="pb-2">
              <CardDescription className="text-xs">Accuracy</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">{accuracy}%</div>
            </CardContent>
          </Card>
        </div>

        {/* Quote Card */}
        <Card className="bg-white/70 dark:bg-slate-900/70 backdrop-blur border-2">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Who said this?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Quote */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 p-8 rounded-lg border-l-4 border-blue-500">
              <blockquote className="text-xl md:text-2xl font-serif italic leading-relaxed text-slate-800 dark:text-slate-200">
                "{currentQuote.text}"
              </blockquote>
            </div>

            {/* Answer Feedback */}
            {gameState === "answered" && (
              <div
                className={`p-4 rounded-lg text-center font-semibold text-lg transition-all ${
                  isCorrect
                    ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-2 border-green-500"
                    : "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 border-2 border-red-500"
                }`}
              >
                {isCorrect ? (
                  <div className="space-y-1">
                    <div className="text-2xl">🎉 Correct!</div>
                    <div className="text-sm">It was {currentQuote.authorFull}</div>
                  </div>
                ) : (
                  <div className="space-y-1">
                    <div className="text-2xl">❌ Wrong!</div>
                    <div className="text-sm">
                      It was {currentQuote.authorFull}, not {selectedAnswer === "Stalin" ? "Joseph Stalin" : "Eric Adams"}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Action Buttons */}
            {gameState === "playing" ? (
              <div className="grid grid-cols-2 gap-4">
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => handleGuess("Stalin")}
                  className="h-20 text-xl font-bold border-2 hover:border-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition-all"
                >
                  <div className="text-center">
                    <div>Joseph Stalin</div>
                    <div className="text-xs font-normal text-muted-foreground">Soviet Leader</div>
                  </div>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => handleGuess("Adams")}
                  className="h-20 text-xl font-bold border-2 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all"
                >
                  <div className="text-center">
                    <div>Eric Adams</div>
                    <div className="text-xs font-normal text-muted-foreground">NYC Mayor</div>
                  </div>
                </Button>
              </div>
            ) : (
              <Button
                size="lg"
                onClick={handleNext}
                className="w-full h-14 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Next Quote →
              </Button>
            )}

            {/* Reset Button */}
            {questionsAnswered > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={resetGame}
                className="w-full"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Reset Game
              </Button>
            )}
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground pb-8">
          <p>A fun quiz comparing quotes from Joseph Stalin and NYC Mayor Eric Adams</p>
        </div>
      </div>
    </div>
  );
}
