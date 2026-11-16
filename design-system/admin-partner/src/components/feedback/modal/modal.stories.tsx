import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../inputs/button/button';
import { Modal } from './modal';

const meta = { title: 'Feedback/Modal', component: Modal, parameters: { layout: 'fullscreen' } } satisfies Meta<typeof Modal>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '정산 상세',
    children: '건별 정산 상세 내용이 표시됩니다.',
    footer: <Button variant="secondaryGray">닫기</Button>,
  },
};
