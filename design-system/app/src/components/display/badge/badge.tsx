export interface BadgeProps {
  variant: 'onSale' | 'saleClosed';
  children: string;
}

export function Badge({ variant, children }: BadgeProps) {
  return <span className={`ap-badge ap-badge--${variant}`}>{children}</span>;
}
