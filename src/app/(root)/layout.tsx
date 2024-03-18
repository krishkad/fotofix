import Navbar from '@/components/layout/Navbar'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='w-full'>
            <nav className='w-full'><Navbar /></nav>
            <main className='w-full'>{children}</main>
        </div>
    )
}

export default Layout