import { BackSVG } from '../../icons/icons';

export interface HeaderProps {
  title: string;
  onBack?: () => void;
}

export function Header({ title, onBack }: HeaderProps) {
  return (
    <header className="ap-header">
      <button type="button" aria-label="뒤로" onClick={onBack} style={{ border: 0, background: 'none', padding: 0, cursor: 'pointer' }}>
        <BackSVG size={22} />
      </button>
      {title}
    </header>
  );
}
