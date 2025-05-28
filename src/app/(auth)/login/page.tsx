'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema } from '@/lib/types';
import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage } from '@/components/ui/form';
import Link from 'next/link';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Loader from '@/components/Loader';
import { actionLoginUser } from '@/lib/actions/auth-actions';
import Logo from "@/../public/images/logo.png";

const LoginPage = () => {
    const router = useRouter();
    const [submitErr, setSubmitErr] = useState('');

    const form = useForm<z.infer<typeof FormSchema>>({
        mode:"onChange",
        resolver: zodResolver(FormSchema),
        defaultValues: {email:'', password:''}
    })

    const isLoading = form.formState.isSubmitting;

    const onSubmit:SubmitHandler<z.infer<typeof FormSchema>> = async (formData) =>  {
        const {error} = await actionLoginUser(formData);
        if(error){
            form.reset();
            setSubmitErr(error.message);
        }
        router.replace('/dashboard ')
    };

    return (
        <Form {...form}>
            <form
                onChange={() => {
                    if(submitErr) setSubmitErr('');
                }}
            onSubmit={form.handleSubmit(onSubmit)} className='w-full sm:justify-center sm:w-[400px] space-y-6 flex flex-col'>

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

                <FormDescription className='text-foreground/60'>
                    All in one Collaboration Lorem ipsum dolor sit amet.
                </FormDescription>

                {/* FORM FIELD FOR EMAIL */}
                <FormField 
                    disabled={isLoading}
                    control={form.control}
                    name='email'
                    render={
                        ({field}) => (
                            <FormItem>
                                <FormControl>
                                    <Input type='email' placeholder='Email' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )
                    }
                >
                </FormField>


                {/* FORM FIELD FOR PASSWORD */}
                <FormField 
                    disabled={isLoading}
                    control={form.control}
                    name='password'
                    render={
                        ({field}) => (
                            <FormItem>
                                <FormControl>
                                    <Input type='password' placeholder='Password' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )
                    }
                >
                </FormField>
                {submitErr && <FormMessage>{submitErr}</FormMessage>}
                <Button type='submit' className='w-full p-6' size="lg" disabled={isLoading}>
                    {!isLoading ? 'Login' : <Loader/>}
                </Button>
                <span className='self-center'>
                    Don&apos;t have an account? 
                    <Link href={"/signup"} className='text-primary-purple-300'> Sign up</Link>
                </span>
            </form>
        </Form>
    )
}

export default LoginPage