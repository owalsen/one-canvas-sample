import type { Meta, StoryObj } from '@storybook/react';
import { SectionTitle } from './sectionTitle';

const meta = { title: 'Display/SectionTitle', component: SectionTitle } satisfies Meta<typeof SectionTitle>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { children: '알림 설정' } };

