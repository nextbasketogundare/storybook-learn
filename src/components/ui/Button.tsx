import { clsx } from 'clsx';


interface IButton {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'danger';
    disabled?: boolean;
}

export const Button = ({ children, onClick, variant = 'primary', ...rest }: IButton) => {
    return (
        <button
            onClick={onClick}
            className={clsx('px-4 py-2 rounded-md', {
                'bg-blue-500 text-white hover:bg-blue-400': variant === 'primary',
                'bg-red-500 text-white hover:bg-red-400': variant === 'danger',
                'bg-gray-200 text-gray-800 hover:bg-gray-100': variant === 'secondary',
                'cursor-not-allowed bg-gray-200 hover:bg-gray-200': rest.disabled,
            })}
            {...rest}
        >
            {children}
        </button>
    )
}
