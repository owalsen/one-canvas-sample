import type { Meta, StoryObj } from '@storybook/react';
import { InfoField } from './infoField';

const meta = { title: 'Display/InfoField', component: InfoField } satisfies Meta<typeof InfoField>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { label: '상품 판매액', value: '1,340,000원' } };
export const WithHelperText: Story = {
  args: { label: '플랫폼 수수료', value: '-134,000원', helperText: '수수료율 10%' },
};
