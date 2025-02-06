import React from 'react';
interface Props {
    children: React.ReactNode;
}

export default function Layout({ children }: Props) {
    return (
        <div>
        <div className="border-b text-center text-white bg-slate-700 p-2">20% off for the next 3 days</div>
        {children}
        </div>
    )
}