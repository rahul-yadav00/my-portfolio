import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rahul Yadav | Developer Portfolio",
  description: "A passionate full-stack developer building powerful web apps.",
  openGraph: {
    title: "Rahul Yadav | Developer Portfolio",
    description: "Check out my projects, skills, and journey.",
    url: "https://your-portfolio.vercel.app", // Replace with your domain
    siteName: "Rahul Yadav Portfolio",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
