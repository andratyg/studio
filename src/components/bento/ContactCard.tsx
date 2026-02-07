
import { Github, Linkedin, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactCard() {
  return (
    <div className="bento-card p-8 flex flex-col md:flex-row items-center justify-between gap-8 h-full">
      <div className="flex flex-col gap-6 w-full md:w-auto">
        <h3 className="text-sm font-code text-muted-foreground uppercase tracking-widest">Stay Connected</h3>
        <div className="flex items-center gap-6">
          <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-all duration-300">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-all duration-300">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-all duration-300">
            <MessageCircle className="w-6 h-6" />
          </a>
        </div>
      </div>
      
      <div className="w-full md:w-auto">
        <Button size="lg" className="w-full md:w-auto bg-primary text-black font-bold text-lg px-12 py-8 rounded-full shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-[0_0_40px_rgba(0,255,255,0.5)] transition-all group">
          Let's Collaborate
          <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
        </Button>
      </div>
    </div>
  );
}
