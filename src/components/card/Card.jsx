import React from 'react';

const Card = ({ children }) => {
    return (
        <article className='bg-white shadow w-full rounded-lg overflow-hidden'>{children}</article>
    );
};

function Title({ children }) {
    return (
        <div className='p-4 border-b border-slate-300'>
            <h1 className='text-xl sm:text-2xl font-semibold'>{children}</h1>
        </div>
    );
}

function Body({ children }) {
    return <div className='p-4'>{children}</div>;
}

function Footer({ children }) {
    return <div className='p-4 bg-slate-100'>{children}</div>;
}

Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
