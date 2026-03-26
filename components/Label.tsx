import { cn } from '@/lib/cn';

export default function Label({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn('inline-block text-[0.68rem] tracking-[0.14em] uppercase text-muted px-3 py-1.5 border border-border rounded-full mb-4', className)}>
      {children}
    </span>
  );
}
