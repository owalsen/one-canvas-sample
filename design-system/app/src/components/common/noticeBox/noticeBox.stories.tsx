import type { Meta, StoryObj } from '@storybook/react';
import { NoticeBox } from './noticeBox';

const meta = { title: 'Components/NoticeBox', component: NoticeBox } satisfies Meta<typeof NoticeBox>;
export default meta;
type Story = StoryObj<typeof meta>;


export const Cta: Story = { args: { variant: 'CTA', description: '알림 설정 바로가기' } };
export const UnavailableAddress: Story = { args: { variant: 'UNAVAILABLE_ADDRESS', description: '배송이 불가능한 지역이에요.' } };
export const GroupDelivery: Story = { args: { variant: 'GROUP_DELIVERY', description: '묶음 배송 상품이에요.' } };

