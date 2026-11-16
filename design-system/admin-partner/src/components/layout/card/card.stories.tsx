import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './card';

const meta = { title: 'Layout/Card', component: Card } satisfies Meta<typeof Card>;
export default meta;
type Story = StoryObj<typeof meta>;

export const FormCard: Story = { args: { title: '정산 요약', children: '카드 본문 영역' } };
