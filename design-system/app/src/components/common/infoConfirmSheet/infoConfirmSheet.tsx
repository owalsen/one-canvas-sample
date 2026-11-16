import type { ReactNode } from 'react';
import { Backdrop } from '../backdrop/backdrop';

export interface InfoConfirmSheetProps {
  align?: 'stretch';
  title: string;
  children: ReactNode;
  footer?: ReactNode;
}

export function InfoConfirmSheet({ align = 'stretch', title, children, footer }: InfoConfirmSheetProps) {
  return (
    <>
      <Backdrop />
      <section className={`ap-sheet ap-sheet--${align}`} role="dialog" aria-label={title}>
        <h3>{title}</h3>
        {children}
        {footer}
      </section>
    </>
  );
}
