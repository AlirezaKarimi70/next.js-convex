'use client'
import Link from 'next/link'
import React from 'react'
import { Button, buttonVariants } from '../ui/button'
import { ThemeToggle } from './theme.toggle'
import { useConvexAuth } from 'convex/react'
import { authClient } from '@/lib/auth-client'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

function NavBar() {
    const { isAuthenticated, isLoading } = useConvexAuth();
    const router = useRouter()
    return (
        <nav className='flex w-full items-center justify-between'>
            <div className='flex items-center gap-4 '>
                <div className='text-3xl'>
                    Next<span className='text-purple-500'>Pro</span>
                </div>
                <Link href='/' className={buttonVariants({ variant: 'ghost' })}>Home</Link>
                <Link href='/' className={buttonVariants({ variant: 'ghost' })}>Blog</Link>
                <Link href='/create' className={buttonVariants({ variant: 'ghost' })}>Create</Link>
            </div>
            <div className='flex items-center gap-4'>
                {isLoading ? null : isAuthenticated ? (
                    <Button onClick={() => authClient.signOut({
                        fetchOptions: {
                            onSuccess: () => {
                                toast.success('Logged out successfully');
                                router.push('/auth/login')
                            },
                            onError: (error) => {
                                toast.error(error.error.message)
                            }
                        }
                    })} className={buttonVariants({ variant: 'secondary' })}>Logout</Button>
                ) : (
                    <>
                        <Link href='/auth/login' className={buttonVariants({ variant: 'secondary' })}>Login</Link>
                        <Link href='/auth/sign-up' className={buttonVariants()}>Sign up</Link>
                    </>

                )}

                <ThemeToggle />
            </div>
        </nav>
    )
}

export default NavBar