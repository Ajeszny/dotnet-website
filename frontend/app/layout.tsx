import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Oswald } from "next/font/google";
import NavBar from "@/components/navbar/NavBar";

export const metadata: Metadata = {
  title: ".NET",
  description: "SKN .NET official webpage",
};

export const viewport: Viewport = {
  minimumScale: 1,
  width: "device-width",
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
      <body className={`${font.className}`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
