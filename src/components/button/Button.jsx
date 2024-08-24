import React from 'react';

const Button = ({ children, text, className, ...props }) => {
    return (
        <>
            <button
                {...props}
                className={`${className} bg-blue-500 py-2 px-4 rounded-md text-white`}
            >
                {text || children}
            </button>
        </>
    );
};

export default Button;
