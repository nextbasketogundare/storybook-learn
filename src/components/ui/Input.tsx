import { clsx } from 'clsx';

interface TextBoxProps {
    size:  'sm' | 'md' | 'lg';
    placeholder?: string;
    name: string;
}

const TextBox = ({size, name, ...rest}: TextBoxProps) => {
    return <input type="text" className={clsx("bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", {
        'w-24': size === 'sm',
        'w-48': size === 'md',
        'w-64': size === 'lg'
    })}
    {...rest}
    />;
}

export default TextBox;