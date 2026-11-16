import type { ReactNode } from 'react';

export function Bottom({ children }: { children: ReactNode }) {
  return <div className="ap-bottom">{children}</div>;
}
