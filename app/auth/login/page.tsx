'use client'
import { signInschema } from '@/app/schema/auth'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'

function Login() {
    const form = useForm({
        resolver: zodResolver(signInschema),
        defaultValues: {
            email: "",
            password: "",
        }
    })
    function onSubmit(data: any) {
        console.log(data)
    }
    return (
        <Card>
            <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription >Account Login</CardDescription>
            </CardHeader>

            <CardContent>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FieldGroup className='space-y-3'>
                        <Controller
                            control={form.control}
                            name='email'
                            render={({ field, fieldState }) => {
                                return (
                                    <Field>
                                        <FieldLabel>Email</FieldLabel>
                                        <Input
                                            type='email'
                                            placeholder='Email'
                                            aria-invalid={fieldState.invalid}
                                            {...field}
                                        />
                                        {fieldState.error &&
                                            (
                                                <FieldError errors={[fieldState.error]} />
                                            )
                                        }
                                    </Field>
                                )
                            }}
                        />
                        <Controller
                            control={form.control}
                            name='password'
                            render={({ field, fieldState }) => {
                                return (
                                    <Field>
                                        <FieldLabel>Password</FieldLabel>
                                        <Input
                                            type='password'
                                            aria-invalid={fieldState.invalid}
                                            placeholder='Password'
                                            {...field}
                                        />
                                        {fieldState.error &&
                                            (
                                                <FieldError errors={[fieldState.error]} />
                                            )
                                        }
                                    </Field>
                                )
                            }}
                        />
                        <Button>Login</Button>
                    </FieldGroup>

                </form>
            </CardContent>
        </Card>
    )
}

export default Login