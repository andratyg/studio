'use client';

import { ExternalLink, Code2, FolderOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

const projects = [
  {
    title: "Secure RBAC System",
    description: "Sistem manajemen user multi-level dengan keamanan sesi PHP murni & enkripsi custom.",
    tag: "Masterpiece",
    link: "#",
    tech: "PHP Native"
  },
  {
    title: "E-Arsip Sekolah",
    description: "Digitalisasi dokumen surat menyurat menggunakan sistem penomoran otomatis.",
    tag: "Sistem Informasi",
    link: "#",
    tech: "MySQL"
  },
  {
    title: "API Gateway Mini",
    description: "Middleware sederhana untuk menghubungkan berbagai layanan internal.",
    tag: "Backend",
    link: "#",
    tech: "JavaScript"
  }
];

export default function ProjectCard() {
  return (
    <div className="bento-card p-6 md:p-8 flex flex-col h-full group">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <FolderOpen className="w-4 h-4 text-primary" />
          <h3 className="text-sm font-code text-muted-foreground uppercase tracking-widest">Portofolio Proyek</h3>
        </div>
        <Code2 className="w-5 h-5 text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
      </div>

      <ScrollArea className="flex-1 pr-4 -mr-4">
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="group/item border-b border-white/5 pb-6 last:border-0 last:pb-0">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-code bg-primary/10 text-primary px-2 py-0.5 rounded-full border border-primary/20">
                  {project.tag}
                </span>
                <span className="text-[10px] font-code text-muted-foreground">
                  {project.tech}
                </span>
              </div>
              
              <h2 className="text-2xl font-bold mb-2 group-hover/item:neon-text transition-all">
                {project.title}
              </h2>
              
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {project.description}
              </p>

              <Button 
                variant="outline" 
                size="sm"
                className="rounded-full border-primary/20 hover:border-primary transition-all gap-2 group/btn"
                onClick={() => window.open(project.link, '_blank')}
              >
                Lihat Kode
                <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="mt-4 pt-4 border-t border-white/5 text-[10px] font-code text-muted-foreground uppercase tracking-widest flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        Scroll untuk melihat proyek lainnya
      </div>
    </div>
  );
}
