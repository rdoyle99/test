import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "STALIN OR MAMDANI? - NYC vs USSR Quote Game",
  description: "Can you tell the difference between Soviet dictator Joseph Stalin and NYC Mayor Zohran Mamdani? A wild quiz game with 180+ quotes comparing communist rhetoric across time!",
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
