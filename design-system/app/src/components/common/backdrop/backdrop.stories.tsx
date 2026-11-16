import type { Meta, StoryObj } from '@storybook/react';
import { Backdrop } from './backdrop';

const meta = { title: 'Components/Backdrop', component: Backdrop } satisfies Meta<typeof Backdrop>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

