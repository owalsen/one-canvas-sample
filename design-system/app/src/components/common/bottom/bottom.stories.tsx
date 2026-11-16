import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../inputs/button/button';
import { Bottom } from './bottom';

const meta = { title: 'Components/Bottom', component: Bottom } satisfies Meta<typeof Bottom>;
export default meta;
type Story = StoryObj<typeof meta>;


export const SingleButton: Story = { args: { children: <Button>구매하기</Button> } };

