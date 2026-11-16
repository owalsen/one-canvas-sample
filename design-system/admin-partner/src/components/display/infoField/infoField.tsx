export interface InfoFieldProps {
  label: string;
  value: string;
  helperText?: string;
}

export function InfoField({ label, value, helperText }: InfoFieldProps) {
  return (
    <dl className="ds-info">
      <dt>{label}</dt>
      <dd>
        {value}
        {helperText && <small>{helperText}</small>}
      </dd>
    </dl>
  );
}
