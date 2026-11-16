export interface RemovableChipProps {
  variant?: 'filled';
  label: string;
  onRemove?: () => void;
}

export function RemovableChip({ variant = 'filled', label, onRemove }: RemovableChipProps) {
  return (
    <span className={`ap-chip ap-chip--${variant}`}>
      {label}
      <button type="button" aria-label={`${label} 삭제`} onClick={onRemove}>×</button>
    </span>
  );
}
