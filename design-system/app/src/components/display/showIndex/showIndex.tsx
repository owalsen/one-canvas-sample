export interface ShowIndexProps {
  type: 'GOODS';
  current: number;
  total: number;
}

export function ShowIndex({ current, total }: ShowIndexProps) {
  return <span className="ap-showindex">{current} / {total}</span>;
}
