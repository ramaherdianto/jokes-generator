import React from 'react';

const ContentWrapper = ({ children }) => {
    return (
        <main className='min-h-screen bg-slate-50 flex items-center justify-center p-4'>
            <section className='max-w-md w-full'>{children}</section>
        </main>
    );
};

export default ContentWrapper;
