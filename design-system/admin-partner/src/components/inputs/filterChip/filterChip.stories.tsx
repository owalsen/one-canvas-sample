import type { Meta, StoryObj } from '@storybook/react';
import { FilterChip } from './filterChip';

const meta = { title: 'Inputs/FilterChip', component: FilterChip } satisfies Meta<typeof FilterChip>;
export default meta;
type Story = StoryObj<typeof meta>;

export const ChipGroup: Story = {
  args: {
    items: [
      { id: 'period', label: '기간: 2026-06-22 ~ 2026-07-22' },
      { id: 'status', label: '상태: 완료' },
    ],
  },
};
