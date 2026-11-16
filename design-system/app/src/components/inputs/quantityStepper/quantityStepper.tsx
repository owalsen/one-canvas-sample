export interface QuantityStepperProps {
  variant?: 'bordered';
  value: number;
  onChange?: (value: number) => void;
}

export function QuantityStepper({ variant = 'bordered', value, onChange }: QuantityStepperProps) {
  return (
    <div className={`ap-stepper ap-stepper--${variant}`}>
      <button type="button" aria-label="감소" disabled={value <= 1} onClick={() => onChange?.(value - 1)}>−</button>
      <span>{value}</span>
      <button type="button" aria-label="증가" onClick={() => onChange?.(value + 1)}>+</button>
    </div>
  );
}
