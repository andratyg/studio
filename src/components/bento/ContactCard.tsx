'use client';

import { Github, Linkedin, MessageCircle, Mail, Copy, Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

export default function ContactCard() {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const email = "nara@example.com"; // Ganti dengan email asli Anda
  const whatsappNumber = "628123456789"; // Ganti dengan nomor WA asli Anda

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    toast({
      title: "Email Copied!",
      description: "Alamat email telah disalin ke clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bento-card p-8 flex flex-col md:flex-row items-center justify-between gap-8 h-full">
      <div className="flex flex-col gap-6 w-full md:w-auto">
        <h3 className="text-sm font-code text-muted-foreground uppercase tracking-widest">Stay Connected</h3>
        <div className="flex flex-wrap items-center gap-4">
          <button 
            onClick={copyToClipboard}
            className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all group"
          >
            <Mail className="w-4 h-4 text-primary" />
            <span className="text-sm font-code lowercase">{email}</span>
            {copied ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3 opacity-30 group-hover:opacity-100" />}
          </button>

          <div className="flex items-center gap-4">
            <a 
              href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Halo%20Nara,%20saya%20tertarik%20bekerja%20sama.`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-all duration-300"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
            <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-all duration-300">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-all duration-300">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="w-full md:w-auto">
        <Button 
          size="lg" 
          className="w-full md:w-auto bg-primary text-black font-bold text-lg px-12 py-8 rounded-full shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-[0_0_40px_rgba(0,255,255,0.5)] transition-all group"
          onClick={() => window.location.href = `mailto:${email}`}
        >
          Let's Collaborate
          <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
        </Button>
      </div>
    </div>
  );
}
