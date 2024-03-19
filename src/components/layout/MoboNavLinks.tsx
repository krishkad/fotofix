import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Link from 'next/link'
import { SignInButton, SignOutButton, SignedIn, SignedOut } from '@clerk/nextjs'
import { Switch } from '../ui/switch'
import { Label } from '../ui/label'
import { navLinks } from '@/constants'
import { SheetClose } from '../ui/sheet'

const MoboNavLinks = () => {
    return (
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger className='hover:no-underline'>Getting Started</AccordionTrigger>
                <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className='hover:no-underline'>Features</AccordionTrigger>
                <AccordionContent>
                    <div className="w-full flex flex-col gap-4">
                        {navLinks.map((item, i) => {
                            return <SheetClose asChild key={i}>
                                <Link href={item.route} className='w-full'>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium leading-none">{item.label}</span>
                                        <span className="line-clamp-2 text-sm leading-snug text-muted-foreground">{item.subTitle}</span>
                                    </div>
                                </Link>
                            </SheetClose>
                        })}
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger className='hover:no-underline'>Use Case</AccordionTrigger>
                <AccordionContent>
                    Yes. It&#39;s animated by default, but you can disable it if you prefer.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
                <Link href={'/plans'}>
                    <span className='flex flex-1 items-center justify-between py-4 font-medium'>Plans</span>
                </Link>
            </AccordionItem>
            <SignedIn>
                <AccordionItem value="item-5">
                    <Link href={'/profile'}>
                        <span className='flex flex-1 items-center justify-between py-4 font-medium'>Profile</span>
                    </Link>
                </AccordionItem>
                <AccordionItem value="item-6">
                    <span className='flex flex-1 items-center justify-between py-4 font-medium'>
                        <SignOutButton />
                    </span>
                </AccordionItem>
            </SignedIn>
            <SignedOut>
                <AccordionItem value="item-7">
                    <span className='flex flex-1 items-center justify-between py-4 font-medium'>
                        <SignInButton />
                    </span>
                </AccordionItem>
            </SignedOut>
            <AccordionItem value="item-8">
                <span className='flex flex-1 items-center justify-between py-4 font-medium'>
                    <div className="flex items-center space-x-2">
                        <Switch id="dark-mode" />
                        <Label htmlFor="airplane-mode">Dark Mode</Label>
                    </div>
                </span>
            </AccordionItem>
        </Accordion>
    )
}

export default MoboNavLinks