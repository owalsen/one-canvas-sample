import type { Meta, StoryObj } from '@storybook/react';
import { BottomMenu } from './bottomMenu';

const meta = { title: 'Components/BottomMenu', component: BottomMenu } satisfies Meta<typeof BottomMenu>;
export default meta;
type Story = StoryObj<typeof meta>;


export const StyleSeller: Story = { args: { items: ['홈', '카테고리', '장바구니', '마이'], current: '홈' } };

