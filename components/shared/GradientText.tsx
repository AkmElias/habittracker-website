import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface GradientTextProps extends HTMLAttributes<HTMLSpanElement> {
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p';
}

export default function GradientText({
  as: Component = 'span',
  className,
  children,
  ...props
}: GradientTextProps) {
  return (
    <Component className={cn('gradient-text', className)} {...props}>
      {children}
    </Component>
  );
}
