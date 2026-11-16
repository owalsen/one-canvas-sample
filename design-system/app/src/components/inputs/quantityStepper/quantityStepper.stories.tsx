import type { Meta, StoryObj } from '@storybook/react';
import { QuantityStepper } from './quantityStepper';

const meta = { title: 'Inputs/QuantityStepper', component: QuantityStepper } satisfies Meta<typeof QuantityStepper>;
export default meta;
type Story = StoryObj<typeof meta>;


export const Bordered: Story = { args: { variant: 'bordered', value: 1 } };

