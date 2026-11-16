import type { Meta, StoryObj } from '@storybook/react';
import { RemovableChip } from './removableChip';

const meta = { title: 'Inputs/RemovableChip', component: RemovableChip } satisfies Meta<typeof RemovableChip>;
export default meta;
type Story = StoryObj<typeof meta>;


export const Filled: Story = { args: { variant: 'filled', label: 'M / 블랙' } };

