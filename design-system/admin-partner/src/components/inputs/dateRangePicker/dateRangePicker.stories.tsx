import type { Meta, StoryObj } from '@storybook/react';
import { DateRangePicker } from './dateRangePicker';

const meta = { title: 'Inputs/DateRangePicker', component: DateRangePicker } satisfies Meta<typeof DateRangePicker>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { start: '2026-06-22', end: '2026-07-22' } };
