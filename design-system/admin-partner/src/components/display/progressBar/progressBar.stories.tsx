import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from './progressBar';

const meta = { title: 'Display/ProgressBar', component: ProgressBar } satisfies Meta<typeof ProgressBar>;
export default meta;
type Story = StoryObj<typeof meta>;

export const InProgress: Story = { args: { percent: 60 } };
