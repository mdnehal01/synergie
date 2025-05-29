'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Loader from '@/components/global/Loader';
import { actionLoginUser } from '@/lib/actions/auth-actions';
import Logo from "@/../public/images/logo.png";

const LoginPage = () => {
    const router = useRouter();
    const [submitErr, setSubmitErr] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const [email,setMail] = useState('');
    const [password, setPass] = useState('');

    const handleSubmit = async (e:React.FormEvent) =>  {
        e.preventDefault()
        setIsLoading(true);
        const {error} = await actionLoginUser({email, password});
        if(error){
            setIsLoading(false);
            setSubmitErr(error.message);
        }
        setIsLoading(false)
        router.replace('/dashboard ')
    };

    return (
            <form
                onChange={() => {
                    if(submitErr) setSubmitErr('');
                }}
                onSubmit={handleSubmit} 
                className='w-full sm:justify-center sm:w-[400px] space-y-6 flex flex-col'>

                <Link 
                    href={"/"} 
                    className='
                        w-full
                        flex
                        justify-start
                        items-center
                    '
                >   
                    <Image src={Logo} height={50} width={50} alt="Synergie Logo"/>
                    <span className='font-semibold text-4xl first-letter:ml-2'>
                        synergie.
                    </span>
                </Link>

                <span className='text-foreground/60'>
                    All in one Collaboration Lorem ipsum dolor sit amet.
                </span>

                {/* FORM FIELD FOR EMAIL */}
                <Input type='email' placeholder='Email' value={email} onChange={(event) => {
                    setMail(event.target.value)
                }}/>

                <Input type='password' placeholder='Password' value={password} onChange={(event) => {
                    setPass(event.target.value)
                }}/>
 
                {submitErr && <span>{submitErr}</span>}
                <Button type='submit' className='w-full p-6' size="lg" disabled={isLoading}>
                    {!isLoading ? 'Login' : <Loader/>}
                </Button>
                <span className='self-center'>
                    Don&apos;t have an account? 
                    <Link href={"/signup"} className='text-primary-purple-300'> Sign up</Link>
                </span>
            </form>
    )
}

export default LoginPage