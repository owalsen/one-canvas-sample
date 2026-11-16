import type { ButtonHTMLAttributes } from 'react';

export type ButtonVariant = 'primary' | 'secondaryGray';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function Button({ variant = 'primary', className = '', ...rest }: ButtonProps) {
  return <button className={`ds-btn ds-btn--${variant} ${className}`} {...rest} />;
}
