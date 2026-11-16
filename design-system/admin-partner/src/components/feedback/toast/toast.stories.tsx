import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from './toast';

const meta = { title: 'Feedback/Toast', component: Toast } satisfies Meta<typeof Toast>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { message: '정산 내역이 갱신되었습니다.' } };
