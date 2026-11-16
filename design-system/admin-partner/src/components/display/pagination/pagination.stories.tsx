import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './pagination';

const meta = { title: 'Display/Pagination', component: Pagination } satisfies Meta<typeof Pagination>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { page: 1, totalPages: 2 } };
