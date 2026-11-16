import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta = { title: 'Inputs/Button', component: Button } satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { args: { variant: 'primary', children: '조회' } };
export const SecondaryGray: Story = { args: { variant: 'secondaryGray', children: '초기화' } };
