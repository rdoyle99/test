import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stalin or Adams? - Quote Guessing Game",
  description: "Can you tell the difference between quotes from Joseph Stalin and NYC Mayor Eric Adams? Test your knowledge in this fun quiz game!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
