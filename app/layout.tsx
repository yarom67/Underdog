import type { Metadata } from "next";
import { Noto_Sans_Hebrew } from "next/font/google";
import "./globals.css";

const notoSansHebrew = Noto_Sans_Hebrew({
  variable: "--font-noto-sans-hebrew",
  subsets: ["hebrew", "latin"],
});

export const metadata: Metadata = {
  title: "The Underdog Race | Celebrating Dogs with Disabilities",
  description: "Join the world's first competitive event designed exclusively for dogs with disabilities. A day of joy, community, and resilience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body
        className={`${notoSansHebrew.variable} ${notoSansHebrew.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
