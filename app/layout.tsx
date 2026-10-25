import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'QRDine — Instant QR Table Reservation',
  description: 'Scan, reserve, and dine with instant contactless table booking and digital guest passes.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#090d16] text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
