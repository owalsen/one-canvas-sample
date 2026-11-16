import type { Meta, StoryObj } from '@storybook/react';
import { SegmentedTabs } from './segmentedTabs';

const meta = { title: 'Navigation/SegmentedTabs', component: SegmentedTabs } satisfies Meta<typeof SegmentedTabs>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { tabs: ['일별', '주별', '월별'], selected: '일별' } };
