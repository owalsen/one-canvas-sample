import type { Meta, StoryObj } from '@storybook/react';
import { EmptyState } from './emptyState';

const meta = { title: 'Components/EmptyState', component: EmptyState } satisfies Meta<typeof EmptyState>;
export default meta;
type Story = StoryObj<typeof meta>;

export const IconAndText: Story = { args: { message: '표시할 내용이 없어요.' } };

