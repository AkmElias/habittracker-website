import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export default function Logo({ className, size = 'md', showText = true }: LogoProps) {
  const sizes = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <Link href="/" className={cn('flex items-center gap-2', className)}>
      {/* Logo Icon - Purple Gradient Circle with Check */}
      <div
        className={cn(
          sizes[size],
          'rounded-full flex items-center justify-center gradient-purple shadow-lg'
        )}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-2/3 h-2/3"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 13l4 4L19 7"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {showText && (
        <span className={cn('font-bold text-gray-900', textSizes[size])}>
          Habit Tracker
        </span>
      )}
    </Link>
  );
}
