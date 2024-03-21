"use client";
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Moon, Sun } from 'react-feather';
import { SignInButton, SignOutButton, SignedIn, SignedOut } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';



const NavbarButtons = () => {
    const router = useRouter();
    const [dark, setDark] = useState<boolean>(false);


    return (
        <div className='flex items-center  gap-1 md:gap-3'>
            <Button size={'sm'} variant={'ghost'} className='hidden md:block' onClick={() => setDark(!dark)}>
                {dark ? <Sun className='w-5' /> : <Moon className='w-5' />}
            </Button>
            <SignedIn>
                <span className='flex justify-center items-center hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 font-semibold text-sm'>
                    <SignOutButton signOutCallback={() => router.push('/auth/sign-in')} />
                </span>
            </SignedIn>
            <SignedOut>
                <span className='flex justify-center items-center hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 font-semibold text-sm'>
                    <SignInButton afterSignUpUrl={`/`} />
                </span>
            </SignedOut>
        </div >
    )
}

export default NavbarButtons