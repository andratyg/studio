
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function ProfileCard() {
  const profileImage = PlaceHolderImages.find(img => img.id === 'profile-nara');

  return (
    <div className="bento-card p-8 flex flex-col justify-between h-full group">
      <div className="flex flex-col gap-6">
        <div className="relative w-24 h-24 rounded-2xl overflow-hidden border-2 border-primary/20 group-hover:border-primary transition-colors">
          <Image
            src={profileImage?.imageUrl || ''}
            alt="Nara"
            fill
            className="object-cover"
            data-ai-hint="cyberpunk portrait"
          />
        </div>
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Nara</h1>
          <p className="text-primary font-code text-sm font-medium">Backend Logic & System Architect</p>
          <div className="flex flex-col gap-1">
            <span className="text-muted-foreground text-xs uppercase tracking-widest font-semibold">Siswa SMK Wikrama Bogor</span>
            <span className="text-muted-foreground text-xs uppercase tracking-widest font-semibold">Jurusan PPLG</span>
          </div>
        </div>
      </div>
      
      <div className="mt-8 pt-8 border-t border-white/5">
        <p className="text-xl font-medium leading-relaxed italic opacity-90">
          "Focusing on clean logic, secure systems, and native performance."
        </p>
      </div>
    </div>
  );
}
