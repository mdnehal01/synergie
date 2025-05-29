import React from 'react'

interface LayoutProps{
    params:any;
    children:React.ReactNode 
}

const Layout:React.FC<LayoutProps> = ({children, params}) => {
    return (
        <main className='overflow-hidden flex h-screen'>
            {children}
        </main>
    )
}

export default Layout