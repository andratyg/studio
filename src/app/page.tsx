import ProfileCard from '@/components/bento/ProfileCard';
import TechStackCard from '@/components/bento/TechStackCard';
import ProjectCard from '@/components/bento/ProjectCard';
import CertCard from '@/components/bento/CertCard';
import ServiceCard from '@/components/bento/ServiceCard';
import ContactCard from '@/components/bento/ContactCard';
import { Button } from '@/components/ui/button';
import { FileDown } from 'lucide-react';

export default function Portfolio() {
  return (
    <main className="min-h-screen py-12 px-4 md:px-8 max-w-7xl mx-auto flex flex-col gap-6">
      <header className="mb-4 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <h2 className="text-primary font-code text-sm tracking-widest uppercase mb-2">Portfolio / 2024</h2>
          <p className="text-muted-foreground font-code text-xs">System Architect & Backend Logic</p>
        </div>
        
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <Button 
            className="bg-primary hover:bg-primary/80 text-black font-bold px-6 py-6 rounded-xl shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-[0_0_40px_rgba(0,255,255,0.5)] transition-all animate-pulse"
          >
            <FileDown className="w-5 h-5 mr-2" />
            Download CV (PDF)
          </Button>

          <div className="flex items-center gap-4 text-xs font-code opacity-50">
            <span>LAT: 6.6451° S</span>
            <span>LNG: 106.8438° E</span>
          </div>
        </div>
      </header>

      {/* Main Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-6 gap-6 h-full md:h-[1100px]">
        {/* Profile - Large Square */}
        <div className="md:col-span-2 md:row-span-3">
          <ProfileCard />
        </div>

        {/* Tech Stack - Vertical Medium */}
        <div className="md:col-span-1 md:row-span-3">
          <TechStackCard />
        </div>

        {/* Certificates - Full Height Right */}
        <div className="md:col-span-1 md:row-span-6">
          <CertCard />
        </div>

        {/* Project Highlight - Wide Center */}
        <div className="md:col-span-2 md:row-span-2">
          <ProjectCard />
        </div>

        {/* Services - Small Square */}
        <div className="md:col-span-1 md:row-span-2">
          <ServiceCard />
        </div>

        {/* Contact/CTA - Wide Bottom */}
        <div className="md:col-span-3 md:row-span-1">
          <ContactCard />
        </div>
      </div>

      <footer className="mt-8 text-center text-muted-foreground font-code text-[10px] uppercase tracking-[0.2em] opacity-30">
        Design and Code by Nara © 2024. All Rights Reserved. Built with Pure Logic.
      </footer>
    </main>
  );
}
