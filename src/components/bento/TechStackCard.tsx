import { ShieldAlert } from 'lucide-react';

export default function TechStackCard() {
  const stacks = [
    { name: 'PHP Native', color: 'text-indigo-400' },
    { name: 'MySQL', color: 'text-blue-400' },
    { name: 'JavaScript', color: 'text-yellow-400' },
    { name: 'HTML5', color: 'text-orange-400' }
  ];

  return (
    <div className="bento-card p-6 flex flex-col justify-between h-full">
      <div className="space-y-4">
        <h3 className="text-sm font-code text-muted-foreground uppercase tracking-widest">Arsenal Teknologi</h3>
        <div className="grid grid-cols-1 gap-3">
          {stacks.map((stack) => (
            <div key={stack.name} className="flex items-center gap-3">
              <div className="h-1 w-1 rounded-full bg-primary" />
              <span className={`font-code text-sm ${stack.color}`}>{stack.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-6 flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
        <ShieldAlert className="w-3 h-3 text-primary" />
        <span className="text-[10px] font-bold text-primary tracking-tighter uppercase">No Frameworks Club</span>
      </div>
    </div>
  );
}
