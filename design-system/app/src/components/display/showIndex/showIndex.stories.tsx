import type { Meta, StoryObj } from '@storybook/react';
import { ShowIndex } from './showIndex';

const meta = { title: 'Display/ShowIndex', component: ShowIndex } satisfies Meta<typeof ShowIndex>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Goods: Story = { args: { type: 'GOODS', current: 1, total: 4 } };

