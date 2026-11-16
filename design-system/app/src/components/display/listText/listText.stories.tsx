import type { Meta, StoryObj } from '@storybook/react';
import { ListText } from './listText';

const meta = { title: 'Display/ListText', component: ListText } satisfies Meta<typeof ListText>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { children: '알림은 앱 푸시로 발송됩니다.' } };

