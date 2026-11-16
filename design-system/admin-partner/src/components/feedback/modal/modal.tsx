import type { ReactNode } from 'react';

export interface ModalProps {
  title: string;
  children: ReactNode;
  footer?: ReactNode;
}

export function Modal({ title, children, footer }: ModalProps) {
  return (
    <div className="ds-modal-backdrop">
      <div className="ds-modal" role="dialog" aria-label={title}>
        <h3>{title}</h3>
        {children}
        {footer && <footer>{footer}</footer>}
      </div>
    </div>
  );
}
