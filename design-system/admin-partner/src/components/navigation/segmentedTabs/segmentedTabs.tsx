export interface SegmentedTabsProps {
  tabs: string[];
  selected: string;
  onChange?: (tab: string) => void;
}

export function SegmentedTabs({ tabs, selected, onChange }: SegmentedTabsProps) {
  return (
    <div className="ds-seg" role="tablist">
      {tabs.map((tab) => (
        <button type="button" role="tab" key={tab} aria-selected={tab === selected} onClick={() => onChange?.(tab)}>
          {tab}
        </button>
      ))}
    </div>
  );
}
