import type { Meta, StoryObj } from '@storybook/react';
import { AmountSummaryBox } from '../../display/amountSummaryBox/amountSummaryBox';
import { Button } from '../../inputs/button/button';
import { InfoConfirmSheet } from './infoConfirmSheet';

const meta = { title: 'Components/InfoConfirmSheet', component: InfoConfirmSheet } satisfies Meta<typeof InfoConfirmSheet>;
export default meta;
type Story = StoryObj<typeof meta>;


export const Stretch: Story = {
  args: {
    align: 'stretch',
    title: '확인해 주세요',
    children: <AmountSummaryBox variant="accent" label="결제 예정 금액" amount="45,000원" />,
    footer: <Button>확인했어요</Button>,
  },
};

