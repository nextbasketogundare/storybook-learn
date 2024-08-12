import { Meta } from "@storybook/react";
import TextBox from "./Input";

const meta = {
    title: 'Form/Input',
    component: TextBox
} as Meta<typeof TextBox>;

export default meta;

export const Small = () => <TextBox size="sm" name="search" placeholder="Search" />;
export const Medium = () => <TextBox size="md" name="search" placeholder="Search" />;
export const Large = () => <TextBox size="lg" name="search" placeholder="Search" />;

Small.storyName = 'Small Doctor';