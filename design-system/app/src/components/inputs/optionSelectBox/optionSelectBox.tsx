import { DropdownArrowSVG } from '../../icons/icons';

export interface OptionSelectBoxProps {
  placeholder: string;
  value?: string;
  onClick?: () => void;
}

export function OptionSelectBox({ placeholder, value, onClick }: OptionSelectBoxProps) {
  return (
    <button type="button" className="ap-select" onClick={onClick}>
      <span>{value ?? placeholder}</span>
      <DropdownArrowSVG size={18} />
    </button>
  );
}
