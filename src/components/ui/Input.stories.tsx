import { Meta, StoryObj } from "@storybook/react";
import TextBox from "./Input";

const meta = {
    title: 'Form/Input',
    component: TextBox
} as Meta<typeof TextBox>;

export default meta;

type Story = StoryObj<typeof TextBox> & (() => JSX.Element);

export const Small:Story = () => <TextBox size="sm" name="search" placeholder="Search..." />;
export const Medium:Story = () => <TextBox size="md" name="search" placeholder="Search..." />;
export const Large:Story = () => <TextBox size="lg" name="search" placeholder="Search..." />;

Small.storyName = 'Smallie';