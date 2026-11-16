export interface SwitchProps {
  checked: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
}

export function Switch({ checked, onChange, label = '알림 설정' }: SwitchProps) {
  return <button type="button" role="switch" aria-checked={checked} aria-label={label}
                 className="ap-switch" onClick={() => onChange?.(!checked)} />;
}
