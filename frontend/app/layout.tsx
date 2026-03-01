import type { Metadata } from "next";
import "./globals.css";
import { Oswald } from "next/font/google";
import NavBar from "@/components/navbar/NavBar";

export const metadata: Metadata = {
  title: ".NET",
  description: "SKN .NET official webpage",
};

const font = Oswald({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
