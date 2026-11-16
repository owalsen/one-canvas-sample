import type { ReactNode } from 'react';
import { BlueLineInfoIconSVG, RedLineInfoIconSVG, SmallChevronRightSVG } from '../../icons/icons';

// variant 값은 이 세 가지뿐이다. 새 안내 종류가 필요하면 값을 추가한다(스타일은 기존과 같고 이름만 신설되는 경우가 많다).
export type NoticeBoxVariant = 'UNAVAILABLE_ADDRESS' | 'GROUP_DELIVERY' | 'CTA';

export interface NoticeBoxProps {
  variant: NoticeBoxVariant;
  description: ReactNode;
}

export function NoticeBox({ variant, description }: NoticeBoxProps) {
  return (
    <div className={`ap-notice ap-notice--${variant}`}>
      {variant === 'UNAVAILABLE_ADDRESS' && <RedLineInfoIconSVG size={18} />}
      {variant === 'GROUP_DELIVERY' && <BlueLineInfoIconSVG size={18} />}
      <span>{description}</span>
      {variant === 'CTA' && <SmallChevronRightSVG size={18} />}
    </div>
  );
}
