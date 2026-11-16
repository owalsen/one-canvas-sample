import type { Meta, StoryObj } from '@storybook/react';
import { OptionSelectBox } from './optionSelectBox';

const meta = { title: 'Inputs/OptionSelectBox', component: OptionSelectBox } satisfies Meta<typeof OptionSelectBox>;
export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = { args: { placeholder: '옵션을 선택해 주세요' } };

