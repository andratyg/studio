
'use client';

import { ExternalLink, CodeXml, FolderOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import Image from 'next/image';
import projectsData from '@/lib/projects.json';

export default function ProjectCard() {
  const projects = projectsData.projects;

  return (
    <div className="bento-card p-6 md:p-8 flex flex-col h-full group">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <FolderOpen className="w-4 h-4 text-primary" />
          <h3 className="text-sm font-code text-muted-foreground uppercase tracking-widest">Portofolio Proyek</h3>
        </div>
        <CodeXml className="w-5 h-5 text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
      </div>

      <ScrollArea className="flex-1 pr-4 -mr-4">
        <div className="space-y-10">
          {projects.map((project, index) => {
            return (
              <div key={index} className="group/item border-b border-white/5 pb-8 last:border-0 last:pb-0">
                <div className="relative aspect-video w-full mb-4 rounded-xl overflow-hidden border border-white/10 group-hover/item:border-primary/30 transition-all">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover opacity-80 group-hover/item:opacity-100 group-hover/item:scale-105 transition-all duration-500"
                    data-ai-hint={project.imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex gap-2">
                    <span className="text-[10px] font-code bg-primary text-black px-2 py-0.5 rounded-full font-bold">
                      {project.tag}
                    </span>
                    <span className="text-[10px] font-code bg-black/50 backdrop-blur-md text-white px-2 py-0.5 rounded-full border border-white/20">
                      {project.tech}
                    </span>
                  </div>
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
            );
          })}
        </div>
      </ScrollArea>

      <div className="mt-4 pt-4 border-t border-white/5 text-[10px] font-code text-muted-foreground uppercase tracking-widest flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        Scroll untuk melihat proyek lainnya
      </div>
    </div>
  );
}
