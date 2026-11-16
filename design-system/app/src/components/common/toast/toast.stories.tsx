import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from './toast';

const meta = { title: 'Components/Toast', component: Toast } satisfies Meta<typeof Toast>;
export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = { args: { message: '저장되었어요.' } };
export const PushAgreed: Story = { args: { message: '알림 수신에 동의했어요.' } };
export const PushRevoked: Story = { args: { message: '알림 수신을 해제했어요.' } };

