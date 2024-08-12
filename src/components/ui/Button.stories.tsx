import { Button } from './Button';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
    title: 'Form/Button',
    component: Button
} as Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button> & (() => JSX.Element);

export const Primary: Story = () => <Button variant="primary">Primary</Button>;
export const Secondary: Story = () => <Button variant="secondary">Secondary</Button>;
export const Danger: Story = () => <Button variant="danger">Danger</Button>;