
// import ChakraThemeProvider from '../../../theme/ThemeProvider';
import { Button } from './Button';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
    title: 'Form/Button',
    component: Button,
    args: {
        // children: 'Button Global Args', 
    }
} as Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button> & (() => JSX.Element);

export const Primary: Story = () => <Button variant="primary">Primary</Button>;
export const Secondary: Story = () => <Button variant="secondary">Secondary</Button>;
export const Danger: Story = () => <Button variant="danger">Danger</Button>;


export const PrimaryA: StoryObj<typeof Button> = {
    args: {
        variant: 'primary',
        children: 'Primary Args with decorators',
    },
    // Works like wrapper in React-testing-library
    decorators: [
        (Story) => <div className='bg-gray-200 p-4 flex justify-start items-start flex-col'>
            <Story />
        </div>]
};

export const SecondaryA: StoryObj<typeof Button> = {
    args: {
        variant: 'secondary',
        children: 'Secondary Args',
    },
    // decorators: [(Story) => (<ChakraThemeProvider>
    //     <Flex justify="center" align="center">
    //         <Story />
    //     </Flex>
    // </ChakraThemeProvider>)
    // ]
};

export const DangerA = {
    args: {
        variant: 'danger',
        children: 'Danger Args',
    }
};