import type { SVGProps } from 'react';
import iconData from './iconData.json';

type IconName = keyof typeof iconData;

function makeIcon(name: IconName, stroke: string) {
  const [viewBox, d] = iconData[name];
  const Icon = ({ size = 24, ...rest }: SVGProps<SVGSVGElement> & { size?: number }) => (
    <svg width={size} height={size} viewBox={viewBox} fill="none" stroke={stroke} strokeWidth="1.8"
         strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...rest}>
      <path d={d} />
    </svg>
  );
  Icon.displayName = name;
  return Icon;
}

export const BackSVG = makeIcon('BackSVG', '#111111');
export const RedLineInfoIconSVG = makeIcon('RedLineInfoIconSVG', '#e5322d');
export const BlueLineInfoIconSVG = makeIcon('BlueLineInfoIconSVG', '#2563eb');
export const DropdownArrowSVG = makeIcon('DropdownArrowSVG', '#111111');
export const BellIconSVG = makeIcon('BellIconSVG', '#111111');
export const SmallChevronRightSVG = makeIcon('SmallChevronRightSVG', '#767676');
export const ShoppingCartIconSVG = makeIcon('ShoppingCartIconSVG', '#111111');
export const SettingIconSVG = makeIcon('SettingIconSVG', '#111111');
export const NoDataSVG = makeIcon('NoDataSVG', '#a3a3a3');
export const GreyCloseIconSVG = makeIcon('GreyCloseIconSVG', '#767676');
