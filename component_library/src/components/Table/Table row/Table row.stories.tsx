import type { Meta, StoryObj } from '@storybook/react';
import { TableRow } from './Table row';
import { TableCell } from '../Table cell/Table cell'; // Adjust path as needed

const meta: Meta<typeof TableRow> = {
  title: 'Components/TableRow',
  component: TableRow,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof TableRow>;

export const Default: Story = {
  args: {
    backgroundColor: '#fff',
    disabled: false,
    children: (
      <>
        <TableCell content="Row cell 1" />
        <TableCell content="Row cell 2" />
        <TableCell content="Row cell 3" />
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    backgroundColor: '#f0f0f0',
    disabled: true,
    children: (
      <>
        <TableCell content="Row Cell 1 (Disabled)" />
        <TableCell content="Row Cell 2 (Disabled)" />
      </>
    ),
  },
};
