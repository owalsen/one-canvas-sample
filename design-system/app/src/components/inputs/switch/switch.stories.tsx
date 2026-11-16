import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './switch';

const meta = { title: 'Inputs/Switch', component: Switch } satisfies Meta<typeof Switch>;
export default meta;
type Story = StoryObj<typeof meta>;


export const Off: Story = { args: { checked: false } };
export const On: Story = { args: { checked: true } };

