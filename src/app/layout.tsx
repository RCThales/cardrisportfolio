import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import BrevoConversations from "../components/Chat/chat";

const poppins = Poppins({
  weight: ["100", "200","300", "400","900"],
  subsets: ['latin'] 
});

export const metadata: Metadata = {
  title: 'Thales Cardris',
  description: 'Portfolio website of the musician, composer and sound designer, Thales Cardris.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
      <BrevoConversations />
    </html>
  );
}
