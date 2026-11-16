import type { Meta, StoryObj } from '@storybook/react';
import { SubTitle } from './subTitle';

const meta = { title: 'Display/SubTitle', component: SubTitle } satisfies Meta<typeof SubTitle>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { children: '정산 내역' } };
