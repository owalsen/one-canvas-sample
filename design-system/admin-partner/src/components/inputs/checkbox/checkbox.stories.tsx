import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './checkbox';

const meta = { title: 'Inputs/Checkbox', component: Checkbox } satisfies Meta<typeof Checkbox>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { label: '완료', defaultChecked: true } };
