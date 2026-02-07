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
  }
];

export default function CertCard() {
  return (
    <div className="bento-card p-6 flex flex-col h-full overflow-hidden">
      <div className="flex items-center gap-2 mb-6">
        <Award className="w-4 h-4 text-primary" />
        <h3 className="text-sm font-code text-muted-foreground uppercase tracking-widest">Certified</h3>
      </div>
      
      <div className="relative flex-1 overflow-y-auto no-scrollbar space-y-4 pr-1">
        {certificates.map((cert, i) => {
          const imgData = PlaceHolderImages.find(img => img.id === cert.id);
          return (
            <Dialog key={i}>
              <DialogTrigger asChild>
                <div 
                  className="group/item relative rounded-xl overflow-hidden border border-white/10 bg-white/5 transition-all hover:border-primary/50 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                >
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={imgData?.imageUrl || ''}
                      alt={cert.title}
                      fill
                      className="object-cover opacity-60 group-hover/item:opacity-100 transition-opacity"
                      data-ai-hint={imgData?.imageHint || 'certificate'}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <p className="font-code text-[10px] text-primary uppercase font-bold tracking-tighter mb-1">
                        {cert.title}
                      </p>
                      <p className="text-[9px] text-muted-foreground font-code line-clamp-1">
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
                    Detail sertifikasi dan validitas dokumen profesional.
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-6 mt-4">
                  <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                    <Image
                      src={imgData?.imageUrl || ''}
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
                          <p className="text-[10px] font-code text-muted-foreground uppercase font-bold">Valid Until</p>
                          <p className="text-sm font-medium">{cert.validUntil}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5 transition-colors hover:bg-white/10">
                      <Info className="w-4 h-4 text-primary mt-0.5" />
                      <div>
                        <p className="text-[10px] font-code text-muted-foreground uppercase font-bold">Description</p>
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

      <div className="mt-6 pt-4 border-t border-white/5">
        <div className="flex items-center justify-between text-[10px] font-code text-muted-foreground uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span>Interactive View</span>
          </div>
          <span className="opacity-50">Click for details</span>
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
