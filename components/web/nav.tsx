import Link from 'next/link'
import React from 'react'
import { buttonVariants } from '../ui/button'

function NavBar() {
    return (
        <nav className='flex w-full items-center justify-between'>
            <div className='flex items-center gap-4 '>
                <div className='text-3xl'>
                    Next<span className='text-purple-500'>Pro</span>
                </div>
                <Link href='/' className={buttonVariants({ variant: 'ghost' })}>Home</Link>
                <Link href='/' className={buttonVariants({ variant: 'ghost' })}>Blog</Link>
                <Link href='/' className={buttonVariants({ variant: 'ghost' })}>Create</Link>
            </div>
            <div className='flex items-center gap-4'>
                <Link href='/auth/login' className={buttonVariants({ variant: 'secondary' })}>Login</Link>
                <Link href='/auth/sin-in' className={buttonVariants()}>Sin in</Link>
            </div>
        </nav>
    )
}

export default NavBar