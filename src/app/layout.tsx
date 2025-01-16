import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import {cn} from "@/lib/utils";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Collabori",
  description: "Seamless Real-Time Document Collaboration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" suppressHydrationWarning>
      <body
          className={cn(
              "min-h-screen font-sans antialiased",
              fontSans.variable
          )}
      >
        {children}
      </body>
      </html>
  );
}
