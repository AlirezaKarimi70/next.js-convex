import React from 'react'

function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className='w-full flex items-center'>

            {children}
        </div>
    )
}

export default AuthLayout