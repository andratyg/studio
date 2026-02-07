
'use client';

import { Award, Info, Calendar, Building2, Timer, FileText, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import certData from '@/lib/certificates.json';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";

export default function CertCard() {
  const certificates = certData.certificates;

  return (
    <div className="bento-card p-4 md:p-6 flex flex-col h-full overflow-hidden">
      <div className="flex items-center gap-2 mb-4">
        <Award className="w-4 h-4 text-primary" />
        <h3 className="text-sm font-code text-muted-foreground uppercase tracking-widest">Sertifikasi</h3>
      </div>
      
      <div className="relative flex-1 overflow-y-auto no-scrollbar pr-1">
        <div className="grid grid-cols-3 md:grid-cols-1 gap-2 md:gap-4">
          {certificates.map((cert, i) => (
            <Dialog key={i}>
              <DialogTrigger asChild>
                <div 
                  className="group/item relative rounded-lg md:rounded-xl overflow-hidden border border-white/10 bg-white/5 transition-all hover:border-primary/50 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                >
                  <div className="relative aspect-square md:aspect-[16/9] w-full">
                    <Image
                      src={cert.imageUrl}
                      alt={cert.title}
                      fill
                      className="object-cover opacity-60 group-hover/item:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />
                    
                    <div className="absolute bottom-1 md:bottom-3 left-1 md:left-3 right-1 md:right-3">
                      <p className="font-code text-[6px] md:text-[10px] text-primary uppercase font-bold tracking-tighter leading-tight line-clamp-2 md:line-clamp-none">
                        {cert.title}
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
                    Catatan sertifikasi resmi dan rincian profesional.
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-6 mt-4">
                  <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                    <Image
                      src={cert.imageUrl}
                      alt={cert.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                      <Building2 className="w-4 h-4 text-primary mt-0.5" />
                      <div>
                        <p className="text-[10px] font-code text-muted-foreground uppercase font-bold">Penerbit</p>
                        <p className="text-sm font-medium">{cert.issuer}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                        <Calendar className="w-4 h-4 text-primary mt-0.5" />
                        <div>
                          <p className="text-[10px] font-code text-muted-foreground uppercase font-bold">Tahun</p>
                          <p className="text-sm font-medium">{cert.year}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                        <Timer className="w-4 h-4 text-primary mt-0.5" />
                        <div>
                          <p className="text-[10px] font-code text-muted-foreground uppercase font-bold">Status</p>
                          <p className="text-sm font-medium">{cert.validUntil === 'Lifetime' ? 'Selamanya' : cert.validUntil}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                      <Info className="w-4 h-4 text-primary mt-0.5" />
                      <div>
                        <p className="text-[10px] font-code text-muted-foreground uppercase font-bold">Deskripsi</p>
                        <p className="text-xs text-muted-foreground leading-relaxed mt-1">{cert.description}</p>
                      </div>
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-primary text-black font-bold hover:bg-primary/80 transition-all gap-2"
                    onClick={() => {
                      if (cert.pdfUrl !== '#') {
                        window.open(cert.pdfUrl, '_blank');
                      } else {
                        alert('File PDF belum tersedia.');
                      }
                    }}
                  >
                    <FileText className="w-4 h-4" />
                    Lihat Dokumen PDF
                    <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-white/5">
        <div className="flex items-center justify-between text-[8px] md:text-[10px] font-code text-muted-foreground uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span>Scroll kebawah</span>
          </div>
          <span className="opacity-50">Klik untuk info</span>
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
