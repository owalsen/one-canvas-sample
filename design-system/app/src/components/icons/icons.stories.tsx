import type { Meta, StoryObj } from '@storybook/react';
import { BackSVG, RedLineInfoIconSVG, BlueLineInfoIconSVG, DropdownArrowSVG, BellIconSVG, SmallChevronRightSVG, ShoppingCartIconSVG, SettingIconSVG, NoDataSVG, GreyCloseIconSVG } from './icons';

const meta = { title: 'Icons/Each' } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const BackSvg: Story = { render: () => <BackSVG size={32} /> };
export const RedLineInfoIconSvg: Story = { render: () => <RedLineInfoIconSVG size={32} /> };
export const BlueLineInfoIconSvg: Story = { render: () => <BlueLineInfoIconSVG size={32} /> };
export const DropdownArrowSvg: Story = { render: () => <DropdownArrowSVG size={32} /> };
export const BellIconSvg: Story = { render: () => <BellIconSVG size={32} /> };
export const SmallChevronRightSvg: Story = { render: () => <SmallChevronRightSVG size={32} /> };
export const ShoppingCartIconSvg: Story = { render: () => <ShoppingCartIconSVG size={32} /> };
export const SettingIconSvg: Story = { render: () => <SettingIconSVG size={32} /> };
export const NoDataSvg: Story = { render: () => <NoDataSVG size={32} /> };
export const GreyCloseIconSvg: Story = { render: () => <GreyCloseIconSVG size={32} /> };
