import type { ButtonHTMLAttributes } from 'react';

export type ButtonSize = 'xs' | 'md' | 'xl' | '2xl';
export type ButtonColor = 'black' | 'whiteWithLine' | 'greyOutLine';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  color?: ButtonColor;
}

export function Button({ size = 'xl', color = 'black', className = '', ...rest }: ButtonProps) {
  return <button className={`ap-btn ap-btn--${size} ap-btn--${color} ${className}`} {...rest} />;
}
