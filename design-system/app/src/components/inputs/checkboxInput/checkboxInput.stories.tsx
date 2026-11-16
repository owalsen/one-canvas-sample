import type { Meta, StoryObj } from '@storybook/react';
import { CheckboxInput } from './checkboxInput';

const meta = { title: 'Inputs/CheckboxInput', component: CheckboxInput } satisfies Meta<typeof CheckboxInput>;
export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = { args: { defaultChecked: false, 'aria-label': '선택' } };
export const Checked: Story = { args: { defaultChecked: true, 'aria-label': '선택' } };

