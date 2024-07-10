import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from '../../components/buttons/Button';

const meta = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    text: { control: 'text' },
    color: { control: 'select', options: ['blue', 'red', 'green', 'yellow', 'orange'] },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
  },
  args: { onClick: fn() },
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'Primary Button',
    color: 'blue',
    size: 'md',
  },
};
export const Secondary: Story = {
  args: {
    text: 'Secondary Button',
    color: 'red',
    size: 'md',
  },
};
export const Large: Story = {
  args: {
    text: 'Large Button',
    color: 'blue',
    size: 'lg',
  },
};
export const Small: Story = {
  args: {
    text: 'Small Button',
    color: 'blue',
    size: 'sm',
  },
};
