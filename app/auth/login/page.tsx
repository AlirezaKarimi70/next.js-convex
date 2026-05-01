import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import React from 'react'

function Login() {
    return (
        <Card className='w-full flex flex-col px-3'>
            <CardTitle>Login</CardTitle>
            <CardDescription className='text-2xl '>is login pages</CardDescription>
            <CardContent>
                <Input />
            </CardContent>
        </Card>
    )
}

export default Login