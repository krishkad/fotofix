import React from 'react'
import { NavbarItems } from './NavbarItems'
import NavbarButtons from './NavbarButtons'
import { cn } from '@/lib/utils';
import Link from 'next/link';
import MoboNavbar from './MoboNavbar';
import {
    Comfortaa
} from "next/font/google";


const inter = Comfortaa
    ({ subsets: ["latin"] });

const Navbar = async () => {


    return (
        <div className='w-full'>
            <div className="wrapper">
                <div className="w-full h-16 flex items-center justify-between">
                    <div className="">
                        <Link href={'/'}>
                            <span className={cn("text-2xl text-foreground", inter.className)}>Fotofix</span>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <NavbarItems />
                    </div>
                    <div className="hidden md:block">
                        <NavbarButtons />
                    </div>
                    <div className="hidden max-md:flex gap-5">
                        <MoboNavbar />
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Navbar