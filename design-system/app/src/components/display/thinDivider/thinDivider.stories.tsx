import type { Meta, StoryObj } from '@storybook/react';
import { ThinDivider } from './thinDivider';

const meta = { title: 'Display/ThinDivider', component: ThinDivider } satisfies Meta<typeof ThinDivider>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

