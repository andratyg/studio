import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Nara | Junior Backend Developer PHP | PPLG Specialist Sukabumi",
  description: "Portofolio Nara, Junior Backend Developer PHP dari Sukabumi. Fokus pada clean logic dan native performance. Siswa SMK Wikrama Bogor Jurusan PPLG.",
  keywords: "Junior Backend Developer PHP, Jasa Pembuatan Web PHP, Web Developer Sukabumi, Nara Portfolio, SMK Wikrama Bogor, PPLG Specialist, Backend Developer Sukabumi, PHP Native Expert",
  authors: [{ name: "Nara" }],
  openGraph: {
    title: "Nara | Junior Backend Developer & PPLG Specialist",
    description: "Fokus pada PHP Native, Security, dan Logika Backend. Siswa SMK Wikrama Bogor.",
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
