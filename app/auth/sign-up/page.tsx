'use client'
import { signUpSchema } from '@/app/schema/auth'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import { Controller, useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';


function SignUp() {
    const form = useForm({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            email: "",
            name: "",
            password: "",
        },
    });
    function onSubmit(data: any) {
    }
    return (
        <Card>
            <CardHeader>
                <CardTitle>Sign In</CardTitle>
                <CardDescription>Create a Account</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FieldGroup className='space-y-3'>
                        <Controller
                            control={form.control}
                            name='name'
                            render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>Name</FieldLabel>
                                    <Input
                                        placeholder='Name'
                                        aria-invalid={fieldState.invalid}
                                        {...field}
                                    />
                                    {fieldState.error &&
                                        (
                                            <FieldError errors={[fieldState.error]} />
                                        )
                                    }
                                </Field>

                            )}
                        />
                        <Controller
                            name='email'
                            control={form.control}
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
                            name='password'
                            control={form.control}
                            render={({ field, fieldState }) => {
                                return (
                                    <Field>
                                        <FieldLabel>Password</FieldLabel>
                                        <Input
                                            placeholder='*****'
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
                        <Button>Sign Up</Button>
                    </FieldGroup>
                </form>
            </CardContent>
        </Card>
    )
}

export default SignUp