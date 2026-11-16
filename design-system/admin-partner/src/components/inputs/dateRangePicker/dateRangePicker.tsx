export interface DateRangePickerProps {
  start: string;
  end: string;
  onChange?: (range: { start: string; end: string }) => void;
}

export function DateRangePicker({ start, end, onChange }: DateRangePickerProps) {
  return (
    <div className="ds-daterange">
      <input type="date" value={start} onChange={(e) => onChange?.({ start: e.target.value, end })} />
      <span>~</span>
      <input type="date" value={end} onChange={(e) => onChange?.({ start, end: e.target.value })} />
    </div>
  );
}
