import ProfileCard from '@/components/bento/ProfileCard';
import TechStackCard from '@/components/bento/TechStackCard';
import ProjectCard from '@/components/bento/ProjectCard';
import CertCard from '@/components/bento/CertCard';
import ServiceCard from '@/components/bento/ServiceCard';
import ContactCard from '@/components/bento/ContactCard';

export default function Portfolio() {
  return (
    <main className="min-h-screen py-12 px-4 md:px-8 max-w-7xl mx-auto flex flex-col gap-6">
      <header className="mb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-primary font-code text-sm tracking-widest uppercase mb-2">Portfolio / 2024</h2>
          <p className="text-muted-foreground font-code text-xs">System Architect & Backend Logic</p>
        </div>
        <div className="flex items-center gap-4 text-xs font-code opacity-50">
          <span>LAT: 6.6451° S</span>
          <span>LNG: 106.8438° E</span>
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