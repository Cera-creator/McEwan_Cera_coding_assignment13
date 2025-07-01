import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'Click me',
    backgroundColor: '#007BFF',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    backgroundColor: '#007BFF',
    disabled: true,
  },
};
