
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import ReduxProvider from '../store/ReduxProvider';



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'LJ Lifters Billing Portal',
  description: 'Billing portal for LJ Lifters',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          
          {children}
        </ReduxProvider>
        
      </body>
    </html>
  );
}
