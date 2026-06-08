import { Playfair_Display, Libre_Franklin, Great_Vibes } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const libre = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-libre",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const script = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-script",
  weight: ["400"],
});

export const metadata = {
  title: "Ethereal Union | Evelyn & Arthur",
  description: "Join us in celebrating the wedding of Evelyn & Arthur. An eternal memory digital invitation.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${libre.variable} ${script.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#faf9f5] text-[#1b1c1a] font-sans selection:bg-champagne-gold/30">
        {children}
      </body>
    </html>
  );
}
