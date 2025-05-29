'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useMemo, useState } from 'react';


import Logo from '@/../public/images/logo.png';
import Loader from '@/components/global/Loader';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { MailCheck } from 'lucide-react';
import { actionSignUpUser } from '@/lib/actions/auth-actions';


const Signup = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [submitError, setSubmitError] = useState('');
  const [confirmation, setConfirmation] = useState(false);

  const codeExchangeError = useMemo(() => {
    if (!searchParams) return '';
    return searchParams.get('error_description');
  }, [searchParams]);

  const confirmationAndErrorStyles = useMemo(
    () =>
      clsx('bg-primary', {
        'bg-red-500/10': codeExchangeError,
        'border-red-500/50': codeExchangeError,
        'text-red-700': codeExchangeError,
      }),
    [codeExchangeError]
  );

  const [email,setMail] = useState('');
  const [password, setPass] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault();
    alert(email)
    setIsLoading(true);
    const { error } = await actionSignUpUser({ email, password });
    if (error) {
      setSubmitError(error.message);
      alert(error.message)
    }
    setConfirmation(true);
  };

  return (
      <form
        onChange={() => {
          if (submitError) setSubmitError('');
        }}
        onSubmit={handleSubmit}
        className="w-full sm:justify-center sm:w-[400px]
        space-y-6 flex
        flex-col
        "
      >
        <Link
          href="/"
          className="
          w-full
          flex
          justify-left
          items-center"
        >
          <Image
            src={Logo}
            alt="cypress Logo"
            width={50}
            height={50}
          />
          <span
            className="font-semibold
          dark:text-white text-4xl first-letter:ml-2"
          >
            synergy.
          </span>
        </Link>
        <span
          className="
        text-foreground/60"
        >
          An all-In-One Collaboration and Productivity Platform
        </span>
        {!confirmation && !codeExchangeError && (
          <>
            
                    <Input
                        value={email}
                        onChange={(e) => {
                          setMail(e.target.value);
                        }}
                        type="email"
                        placeholder="Email"
                    />
              
                    <Input
                      value={password}
                      onChange={(e) => {
                        setPass(e.target.value);
                        }}
                        type="password"
                        placeholder="Password"
                    />

                    <Input
                      type="password"
                      placeholder="Confirm Password"
                    />

            <Button
              type="submit"
              className="w-full p-6"
            >
              {!isLoading ? 'Create Account' : <Loader />}
            </Button>
          </>
        )}

        {submitError && <span>{submitError}</span>}
        <span className="self-container">
          Already have an account?{' '}
          <Link
            href="/login"
            className="text-primary"
          >
            Login
          </Link>
        </span>
        {(confirmation || codeExchangeError) && (
          <>
            <Alert className={`${confirmationAndErrorStyles} bg-emerald-700`}>
              {!codeExchangeError && <MailCheck className="h-4 w-4" />}
              <AlertTitle>
                {codeExchangeError ? 'Invalid Link' : 'Check your email.'}
              </AlertTitle>
              <AlertDescription>
                {codeExchangeError || 'An email confirmation has been sent.'}
              </AlertDescription>
            </Alert>
          </>
        )}
      </form>
  );
};

export default Signup;