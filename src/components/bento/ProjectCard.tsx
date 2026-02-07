
import { ExternalLink, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ProjectCard() {
  return (
    <div className="bento-card p-8 flex flex-col justify-between h-full group">
      <div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-sm font-code text-muted-foreground uppercase tracking-widest">Masterpiece</h3>
          <Code2 className="w-5 h-5 text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
        </div>
        <h2 className="text-3xl font-bold mb-4 group-hover:neon-text transition-all">Secure RBAC System</h2>
        <p className="text-muted-foreground leading-relaxed max-w-md">
          Sistem manajemen user multi-level dengan keamanan sesi PHP murni & enkripsi custom. Dirancang untuk skalabilitas dan performa tinggi tanpa dependensi eksternal.
        </p>
      </div>
      
      <div className="mt-8">
        <Button variant="outline" className="rounded-full border-primary/20 hover:border-primary transition-all gap-2 group/btn">
          View Code
          <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
}
