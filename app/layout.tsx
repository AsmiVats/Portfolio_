import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import { Manrope } from '@next/font/google';

// const degular = Manrope({
//   weight: ['400', '700'],
//   subsets: ['latin'],
// });


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const ivypresto = localFont({
  src: "./fonts/IvyPresto.ttf",
  variable: "--font-ivy-presto",
  weight: "400",
});
export const metadata: Metadata = {
  title: "Asmi Vats",
  description: "Porfolio created by NextJs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ivypresto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
