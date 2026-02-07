'use client';

import { Award } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function CertCard() {
  const certImages = [
    { id: 'cert-backend', title: 'Dicoding Backend' },
    { id: 'cert-sql', title: 'SQL Mastery' },
    { id: 'cert-backend', title: 'Sertifikat Kompetensi' },
    { id: 'cert-sql', title: 'Database Security' }
  ];

  return (
    <div className="bento-card p-6 flex flex-col h-full overflow-hidden">
      <div className="flex items-center gap-2 mb-6">
        <Award className="w-4 h-4 text-primary" />
        <h3 className="text-sm font-code text-muted-foreground uppercase tracking-widest">Certified</h3>
      </div>
      
      <div className="relative flex-1 overflow-hidden mask-fade">
        <div className="animate-marquee space-y-6 py-4">
          {[...certImages, ...certImages].map((cert, i) => {
            const imgData = PlaceHolderImages.find(img => img.id === cert.id);
            return (
              <div key={i} className="group/item relative rounded-xl overflow-hidden border border-white/10 bg-white/5 transition-all hover:border-primary/30">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={imgData?.imageUrl || ''}
                    alt={cert.title}
                    fill
                    className="object-cover opacity-60 group-hover/item:opacity-100 transition-opacity"
                    data-ai-hint={imgData?.imageHint || 'certificate'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="font-code text-[10px] text-primary uppercase font-bold tracking-tighter">
                      {cert.title}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <style jsx>{`
        .mask-fade {
          mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
        }
      `}</style>
    </div>
  );
}