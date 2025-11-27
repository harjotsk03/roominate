import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { vilane } from "@/fonts/vilane";
import "./globals.css";
import NavBar from "@/components/NavBar";
import GoToProtypeButton from "@/components/GoToPrototypeButton";
import { biennale } from "@/fonts/Demo_Fonts/biennale";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Roominate - IAT 334",
  description:
    "Clean, organize, declutter. Roominate is the cleaning and decluttering app to help you tidy up your space, donate or discard items you no longer need, and keep a digital memory box so you never have to get rid of that feeling for an item ever again!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={biennale.variable}>
      <body
        className={`bg-white ${geistSans.variable} ${vilane.variable} ${biennale.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        <GoToProtypeButton />
        {children}
      </body>
    </html>
  );
}
