import React, { forwardRef, useEffect } from 'react';

const Input = forwardRef(({ type = 'text', className, isFocused, ...props }, ref) => {
    useEffect(() => {
        if (isFocused) {
            ref.current.focus();
        }
    }, [isFocused]);

    return (
        <input
            ref={ref}
            {...props}
            type={type}
            className={`${className} duration-300 w-full border border-slate-400 rounded-md py-2 px-4 focus:outline-none focus:ring focus:ring-blue-300 focus:`}
        />
    );
});

export default Input;
