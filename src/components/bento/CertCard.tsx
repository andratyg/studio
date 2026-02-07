'use client';

import { Award, Info, Calendar, Building2, Timer } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";

const certificates = [
  {
    id: 'cert-backend',
    title: 'Back-End Developer',
    issuer: 'Dicoding Indonesia',
    year: '2023',
    validUntil: '2026',
    description: 'Sertifikasi kompetensi dalam membangun aplikasi back-end menggunakan Node.js, REST API, dan database NoSQL/SQL.'
  },
  {
    id: 'cert-sql',
    title: 'SQL Database Mastery',
    issuer: 'Mastering SQL Academy',
    year: '2023',
    validUntil: 'Lifetime',
    description: 'Penguasaan query kompleks, optimasi performa database, dan perancangan skema data relasional yang efisien.'
  },
  {
    id: 'cert-backend',
    title: 'Sertifikat Kompetensi',
    issuer: 'BNSP / SMK Wikrama',
    year: '2024',
    validUntil: '2027',
    description: 'Pengakuan kompetensi teknis dalam pengembangan perangkat lunak sesuai dengan standar industri nasional.'
  },
  {
    id: 'cert-sql',
    title: 'Database Security',
    issuer: 'CyberSec Institute',
    year: '2024',
    validUntil: '2027',
    description: 'Fokus pada hardening database, pencegahan SQL Injection, manajemen hak akses, dan enkripsi data sensitif.'
  },
  {
    id: 'cert-backend',
    title: 'Web Security Expert',
    issuer: 'OWASP Foundation',
    year: '2024',
    validUntil: '2027',
    description: 'Pemahaman mendalam tentang celah keamanan web dan teknik mitigasi serangan siber pada level aplikasi.'
  },
  {
    id: 'cert-sql',
    title: 'Cloud Infrastructure',
    issuer: 'Google Cloud',
    year: '2024',
    validUntil: '2026',
    description: 'Deployment dan manajemen infrastruktur backend pada platform Google Cloud dengan efisiensi biaya.'
  },
  {
    id: 'cert-backend',
    title: 'API Design Specialist',
    issuer: 'Postman Academy',
    year: '2023',
    validUntil: 'Lifetime',
    description: 'Standarisasi desain API RESTful, dokumentasi otomatis, dan testing fungsional API berskala besar.'
  },
  {
    id: 'cert-sql',
    title: 'Data Archiving',
    issuer: 'IBM Data Lab',
    year: '2023',
    validUntil: '2028',
    description: 'Strategi pengelolaan data historis dan optimasi penyimpanan untuk database dengan jutaan records.'
  },
  {
    id: 'cert-backend',
    title: 'Clean Architecture',
    issuer: 'Uncle Bob Academy',
    year: '2024',
    validUntil: 'Lifetime',
    description: 'Penerapan prinsip SOLID dan Clean Architecture untuk memastikan kode backend mudah di-maintain.'
  },
  {
    id: 'cert-sql',
    title: 'Redis Mastery',
    issuer: 'Redis University',
    year: '2024',
    validUntil: '2027',
    description: 'Implementasi caching layer menggunakan Redis untuk meningkatkan throughput aplikasi secara signifikan.'
  },
  {
    id: 'cert-backend',
    title: 'System Architect',
    issuer: 'AWS Training',
    year: '2024',
    validUntil: '2027',
    description: 'Perancangan sistem terdistribusi yang skalabel dan fault-tolerant di lingkungan cloud.'
  },
  {
    id: 'cert-sql',
    title: 'Microservices Guru',
    issuer: 'Udemy Business',
    year: '2023',
    validUntil: 'Lifetime',
    description: 'Membangun ekosistem layanan mikro yang komunikatif dan terisolasi dengan baik.'
  }
];

export default function CertCard() {
  return (
    <div className="bento-card p-4 md:p-6 flex flex-col h-full overflow-hidden">
      <div className="flex items-center gap-2 mb-4">
        <Award className="w-4 h-4 text-primary" />
        <h3 className="text-sm font-code text-muted-foreground uppercase tracking-widest">Certifications</h3>
      </div>
      
      {/* Scrollable container with responsive grid: 3 columns on mobile, 1 on laptop */}
      <div className="relative flex-1 overflow-y-auto no-scrollbar pr-1">
        <div className="grid grid-cols-3 md:grid-cols-1 gap-2 md:gap-4">
          {certificates.map((cert, i) => {
            const imgData = PlaceHolderImages.find(img => img.id === cert.id) || PlaceHolderImages[0];
            return (
              <Dialog key={i}>
                <DialogTrigger asChild>
                  <div 
                    className="group/item relative rounded-lg md:rounded-xl overflow-hidden border border-white/10 bg-white/5 transition-all hover:border-primary/50 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <div className="relative aspect-square md:aspect-[16/9] w-full">
                      <Image
                        src={imgData.imageUrl}
                        alt={cert.title}
                        fill
                        className="object-cover opacity-60 group-hover/item:opacity-100 transition-opacity"
                        data-ai-hint={imgData.imageHint}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />
                      
                      <div className="absolute bottom-1 md:bottom-3 left-1 md:left-3 right-1 md:right-3">
                        <p className="font-code text-[6px] md:text-[10px] text-primary uppercase font-bold tracking-tighter leading-tight line-clamp-2 md:line-clamp-none">
                          {cert.title}
                        </p>
                        <p className="hidden md:block text-[9px] text-muted-foreground font-code line-clamp-1 mt-1">
                          {cert.issuer} • {cert.year}
                        </p>
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                
                <DialogContent className="bg-background/95 backdrop-blur-xl border-white/10 text-foreground sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2 text-primary font-code uppercase tracking-wider">
                      <Award className="w-5 h-5" />
                      {cert.title}
                    </DialogTitle>
                    <DialogDescription className="text-muted-foreground font-code text-xs mt-2">
                      Official certification record and professional details.
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="space-y-6 mt-4">
                    <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                      <Image
                        src={imgData.imageUrl}
                        alt={cert.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5 transition-colors hover:bg-white/10">
                        <Building2 className="w-4 h-4 text-primary mt-0.5" />
                        <div>
                          <p className="text-[10px] font-code text-muted-foreground uppercase font-bold">Issuer</p>
                          <p className="text-sm font-medium">{cert.issuer}</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5 transition-colors hover:bg-white/10">
                          <Calendar className="w-4 h-4 text-primary mt-0.5" />
                          <div>
                            <p className="text-[10px] font-code text-muted-foreground uppercase font-bold">Obtained</p>
                            <p className="text-sm font-medium">{cert.year}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5 transition-colors hover:bg-white/10">
                          <Timer className="w-4 h-4 text-primary mt-0.5" />
                          <div>
                            <p className="text-[10px] font-code text-muted-foreground uppercase font-bold">Status</p>
                            <p className="text-sm font-medium">{cert.validUntil === 'Lifetime' ? 'Lifetime' : `Valid until ${cert.validUntil}`}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5 transition-colors hover:bg-white/10">
                        <Info className="w-4 h-4 text-primary mt-0.5" />
                        <div>
                          <p className="text-[10px] font-code text-muted-foreground uppercase font-bold">Key Competencies</p>
                          <p className="text-xs text-muted-foreground leading-relaxed mt-1">{cert.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-white/5">
        <div className="flex items-center justify-between text-[8px] md:text-[10px] font-code text-muted-foreground uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span>Scroll for more</span>
          </div>
          <span className="opacity-50">Click items for info</span>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
