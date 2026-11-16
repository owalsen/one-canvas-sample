import type { Meta, StoryObj } from '@storybook/react';
import { AmountSummaryBox } from './amountSummaryBox';

const meta = { title: 'Display/AmountSummaryBox', component: AmountSummaryBox } satisfies Meta<typeof AmountSummaryBox>;
export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = { args: { label: '결제 예정 금액', amount: '45,000원' } };
export const Accent: Story = { args: { variant: 'accent', label: '결제 예정 금액', amount: '45,000원' } };

