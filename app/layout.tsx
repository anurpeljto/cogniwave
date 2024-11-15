import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import {Roboto} from 'next/font/google';
import {GoogleTagManager} from '@next/third-parties/google';

const roboto_init = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700'],
  variable: '--font-roboto'
})

export const metadata: Metadata = {
  title: "cogni:wave",
  description: "Just a website design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="G-C9GB5D8P2P"/>
      <body
        className={`${roboto_init.variable} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
