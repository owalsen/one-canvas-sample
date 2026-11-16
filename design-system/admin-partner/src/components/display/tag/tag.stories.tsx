import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './tag';

const meta = { title: 'Display/Tag', component: Tag } satisfies Meta<typeof Tag>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { tone: 'success', children: '완료' } };

export const Multiple: Story = {
  args: { children: '완료' },
  render: () => (
    <span className="ds-tag-group">
      <Tag tone="success">완료</Tag>
      <Tag tone="warn">대기</Tag>
      <Tag>보류</Tag>
    </span>
  ),
};
