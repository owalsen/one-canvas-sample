import type { InputHTMLAttributes } from 'react';

export function CheckboxInput(props: Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>) {
  return <input type="checkbox" className="ap-check" {...props} />;
}
