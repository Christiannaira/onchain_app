import type { Metadata } from "next";
import '@coinbase/onchainkit/styles.css';
import localFont from "next/font/local";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
       <Providers>
        {children}
       </Providers>
         
        
      
      </body>
    </html>
  );
}
