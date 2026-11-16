export type TagTone = 'neutral' | 'success' | 'warn';

export interface TagProps {
  tone?: TagTone;
  children: string;
}

export function Tag({ tone = 'neutral', children }: TagProps) {
  const toneClass = tone === 'neutral' ? '' : ` ds-tag--${tone}`;
  return <span className={`ds-tag${toneClass}`}>{children}</span>;
}
