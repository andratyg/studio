
import { CheckCircle2 } from 'lucide-react';

export default function ServiceCard() {
  const services = [
    "Custom Web Systems",
    "Database Optimization",
    "Bug Fixing"
  ];

  return (
    <div className="bento-card p-6 flex flex-col justify-between h-full">
      <div className="space-y-4">
        <h3 className="text-sm font-code text-muted-foreground uppercase tracking-widest">Available For</h3>
        <ul className="space-y-3">
          {services.map((service) => (
            <li key={service} className="text-sm font-medium flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary/40 rounded-full" />
              {service}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mt-6 pt-4 border-t border-white/5">
        <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]" />
          <span className="text-green-500 uppercase">Open for Commissions</span>
        </div>
        <p className="text-[10px] font-code text-muted-foreground mt-1">Accepting USD / IDR</p>
      </div>
    </div>
  );
}
