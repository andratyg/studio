import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Nara | Backend Developer PHP Indonesia | System Architect",
  description: 'Jasa Pembuatan Web PHP & System Architect Specialist. Fokus pada clean logic, secure systems, dan native performance. Siswa SMK Wikrama Bogor.',
  keywords: "Backend Developer PHP Indonesia, Jasa Pembuatan Web PHP, Web Developer Sukabumi, Nara Portfolio, SMK Wikrama Bogor, System Architect",
  authors: [{ name: "Nara" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
