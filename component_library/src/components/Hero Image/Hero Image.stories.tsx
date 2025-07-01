import type { Meta, StoryObj } from '@storybook/react';
import { HeroImage } from './Hero Image';

const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    height: { control: 'text' },
    overlayColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: {
    src: 'https://via.placeholder.com/1200x300',
    alt: 'Hero Image',
    height: '300px',
    overlayColor: '',
    disabled: false,
  },
};

export const WithOverlay: Story = {
  args: {
    src: 'https://via.placeholder.com/1200x300',
    alt: 'Hero Image with overlay',
    height: '300px',
    overlayColor: '#00000099',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    src: 'https://via.placeholder.com/1200x300',
    alt: 'Disabled hero image',
    height: '300px',
    overlayColor: '',
    disabled: true,
  },
};
