import { Meta } from '@storybook/react';
import { Primary } from './Button.stories';
import { Large } from './Input.stories';

const meta = {
    title: 'Form/Subscription'
} as Meta<typeof Primary & typeof Large>;

export default meta;

export const PrimarySubscription = () => (
    <div className='flex gap-2'>
        <Large />
        <Primary />
    </div>
);