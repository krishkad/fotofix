"use client";
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from '@/components/ui/input';
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { cn, handleError } from '@/lib/utils'
import {
    Comfortaa
} from "next/font/google";
import { toast } from "sonner"
import { useRouter } from 'next/navigation';

const inter = Comfortaa
    ({ subsets: ["latin"] });


const Auth = () => {
    const router = useRouter();
    const [signup, setSignup] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
    })
    const [signin, setSignin] = useState({
        email: "",
        password: ""
    });


    const onChangeHandler = (e: any) => {
        e.preventDefault();
        const { name, value } = e.target;
        setSignup(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const onChangeHandlertwo = (e: any) => {
        e.preventDefault();
        const { name, value } = e.target;
        setSignin(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSignUp = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/auth", {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ user: signup, eventType: "create-user" })

            })

            const res = await response.json();

            if (res) {
                toast(res.message, {
                    description: Date.now(),
                    action: {
                        label: "View Profile",
                        onClick: () => router.push('/profile'),
                    },
                })
                if (res.success) router.push('/');
            }
        } catch (error) {
            handleError(error);
        }
    }

    const handleSignIn = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/auth", {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ user: signin, eventType: "login-user" })

            })

            const res = await response.json();

            if (res) {
                toast(res.message, {
                    description: Date.now(),
                    action: {
                        label: "View Profile",
                        onClick: () => router.push('/profile'),
                    },
                })
                if (res.success) router.push('/')
            }
            localStorage.setItem('user-info', res.user._id);
        } catch (error) {
            handleError(error);
        }
    }
    return (
        <div>
            <Tabs defaultValue="sign-up" className="w-full sm:w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="sign-up">Sign Up</TabsTrigger>
                    <TabsTrigger value="sign-in">Sign In</TabsTrigger>
                </TabsList>
                <TabsContent value="sign-up">
                    <Card>
                        <CardHeader>
                            <CardTitle className='flex flex-col'>
                                < span className={cn('text-2xl', inter.className)} > Fotofix</span >
                                <span className='font-semibold text-sm'>Sign Up</span>

                            </CardTitle>
                            <CardDescription>
                                Make changes to your account here. Click save when you're done.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            < div className="w-full flex gap-4 space-y-1" >
                                <div className="w-1/2 space-y-1">
                                    <Label htmlFor="firstname">First Name</Label>
                                    <Input required id="firstname" value={signup.firstname} name='firstname' onChange={onChangeHandler} placeholder="Enter First Name" />
                                </div>
                                <div className="w-1/2 space-y-1">
                                    <Label htmlFor="lastname">Last Name</Label>
                                    <Input required id="lastname" value={signup.lastname} name='lastname' onChange={onChangeHandler} placeholder="Enter Last Name" />
                                </div>
                            </div >
                            <div className="space-y-1">
                                <Label htmlFor="email">E-mail</Label>
                                <Input required id="email" value={signup.email} name='email' onChange={onChangeHandler} type='email' placeholder="Enter E-mail" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="password">Password</Label>
                                <Input required id="password " value={signup.password} name='password' onChange={onChangeHandler} type='password' placeholder="Enter Password" />
                            </div>

                        </CardContent>
                        <CardFooter>
                            <Button onClick={handleSignUp}>Sign Up</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="sign-in">
                    <Card>
                        <CardHeader>
                            <CardTitle className='flex flex-col'>
                                <span className={cn('text-2xl', inter.className)}>Fotofix</span>
                                <span className='font-semibold text-sm'>Sign In</span>
                            </CardTitle>
                            <CardDescription>
                                Change your password here. After saving, you'll be logged out.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="email">E-mail</Label>
                                <Input required id="email" type="email" name='email' value={signin.email} onChange={onChangeHandlertwo} placeholder='Enter E-mail' />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="password">Password</Label>
                                <Input required id="password" name='password' type="password" value={signin.password} onChange={onChangeHandlertwo} placeholder='Enter Password' />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button onClick={handleSignIn}>Sign In</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default Auth