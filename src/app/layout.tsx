import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Nara | Backend Developer PHP Indonesia | System Architect Sukabumi",
  description: "Jasa Pembuatan Web PHP & System Architect Specialist di Sukabumi. Fokus pada clean logic, secure systems, dan native performance. Siswa SMK Wikrama Bogor Jurusan PPLG.",
  keywords: "Backend Developer PHP Indonesia, Jasa Pembuatan Web PHP, Web Developer Sukabumi, Nara Portfolio, SMK Wikrama Bogor, System Architect, Backend Developer Sukabumi, PHP Native Expert",
  authors: [{ name: "Nara" }],
  openGraph: {
    title: "Nara | Backend Developer & System Architect",
    description: "Expert in PHP Native, Security, and System Architecture. Let's build something secure and fast.",
    type: "website",
    locale: "id_ID",
  },
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
