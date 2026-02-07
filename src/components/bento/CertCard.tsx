'use client';

import { Award } from 'lucide-react';

export default function CertCard() {
  const certs = [
    "Dicoding Backend",
    "Sertifikat Kompetensi SMK",
    "Basic SQL Mastery",
    "Clean Code Fundamentals",
    "Database Security Advanced",
    "Native PHP Performance"
  ];

  return (
    <div className="bento-card p-6 flex flex-col h-full overflow-hidden">
      <div className="flex items-center gap-2 mb-6">
        <Award className="w-4 h-4 text-primary" />
        <h3 className="text-sm font-code text-muted-foreground uppercase tracking-widest">Certified</h3>
      </div>
      
      <div className="relative flex-1 overflow-hidden mask-fade">
        <div className="animate-marquee space-y-4 py-2">
          {/* Double list for seamless loop */}
          {[...certs, ...certs].map((cert, i) => (
            <div key={i} className="p-3 rounded-lg bg-white/5 border border-white/5 font-code text-[11px] leading-tight">
              {cert}
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .mask-fade {
          mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </div>
  );
}
