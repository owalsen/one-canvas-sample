import type { Meta, StoryObj } from '@storybook/react';
import { ThumbnailSwiper } from './thumbnailSwiper';

const meta = { title: 'Components/ThumbnailSwiper', component: ThumbnailSwiper } satisfies Meta<typeof ThumbnailSwiper>;
export default meta;
type Story = StoryObj<typeof meta>;


export const MultipleImages: Story = {
  args: { images: [
    { id: 'a', color: '#6b7280' }, { id: 'b', color: '#9ca3af' }, { id: 'c', color: '#4b5563' }, { id: 'd', color: '#a1a1aa' },
  ] },
};

