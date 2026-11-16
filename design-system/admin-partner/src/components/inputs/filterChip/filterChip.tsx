export interface FilterChipItem {
  id: string;
  label: string;
}

export interface FilterChipProps {
  items: FilterChipItem[];
  onRemove?: (id: string) => void;
}

export function FilterChip({ items, onRemove }: FilterChipProps) {
  return (
    <div className="ds-chips">
      {items.map((item) => (
        <span className="ds-chip" key={item.id}>
          {item.label}
          <button type="button" aria-label={`${item.label} 해제`} onClick={() => onRemove?.(item.id)}>
            ×
          </button>
        </span>
      ))}
    </div>
  );
}
