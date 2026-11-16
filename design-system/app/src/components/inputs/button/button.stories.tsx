import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta = { title: 'Inputs/Button', component: Button } satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = { args: { size: 'xl', color: 'black', children: '확인' } };
export const WhiteWithLine: Story = { args: { size: 'xl', color: 'whiteWithLine', children: '취소' } };
export const GreyOutLine: Story = { args: { size: 'xs', color: 'greyOutLine', children: '삭제' } };

