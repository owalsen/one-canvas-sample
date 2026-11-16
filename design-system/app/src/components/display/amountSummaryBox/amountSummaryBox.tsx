export interface AmountSummaryBoxProps {
  variant?: 'default' | 'accent';
  label: string;
  amount: string;
}

export function AmountSummaryBox({ variant = 'default', label, amount }: AmountSummaryBoxProps) {
  return (
    <div className={`ap-amount ${variant === 'accent' ? 'ap-amount--accent' : ''}`}>
      <span>{label}</span>
      <strong>{amount}</strong>
    </div>
  );
}
