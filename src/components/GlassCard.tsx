
import { ReactNode, CSSProperties } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  style?: CSSProperties;
}

const GlassCard = ({ children, className, hover = true, style }: GlassCardProps) => {
  return (
    <div
      className={cn(
        'glass-card rounded-xl p-6 transition-all duration-300',
        hover && 'hover:shadow-2xl hover:scale-105 hover:bg-white/90',
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export default GlassCard;
