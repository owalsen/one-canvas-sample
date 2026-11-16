import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './badge';

const meta = { title: 'Display/Badge', component: Badge } satisfies Meta<typeof Badge>;
export default meta;
type Story = StoryObj<typeof meta>;


export const OnSale: Story = { args: { variant: 'onSale', children: '판매중' } };
export const SaleClosed: Story = { args: { variant: 'saleClosed', children: '품절' } };

