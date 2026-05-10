'use client'
import { BlogSchema } from '@/app/schema/blog'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Spinner } from '@/components/ui/spinner'
import { Textarea } from '@/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'

function CreatePost() {
    const form = useForm({
        resolver: zodResolver(BlogSchema),
        defaultValues: {
            title: "",
            content: "",
        }
    })
    return (
        <div className='py-12'>
            <div className='text-center mb-6'>
                <h1 className='text-3xl font-extrabold tracking-tight sm:text-4xl'>Create Post</h1>
                <p className='text-xl text-muted-foreground pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <Card className='w-full max-w-xl mx-auto'>
                <CardHeader>
                    <CardTitle>
                        Create Post Blog
                    </CardTitle>
                    <CardDescription>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptate. Molestias, dicta. Doloribus, voluptate. Molestias, dicta.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <FieldGroup>
                            <Controller control={form.control} name='title' render={({ field }) => (
                                <Field>
                                    <FieldLabel>Title</FieldLabel>
                                    <Input placeholder='Title' {...field} />
                                    <FieldError>{form.formState.errors.title?.message}</FieldError>
                                </Field>
                            )}

                            />
                            <Controller control={form.control} name='content' render={({ field }) => (
                                <Field>
                                    <FieldLabel>Content</FieldLabel>
                                    <Textarea placeholder='Content' {...field} />
                                    <FieldError>{form.formState.errors.content?.message}</FieldError>
                                </Field>
                            )}

                            />
                            <Button> {true ? (
                                <>
                                    <Spinner />
                                </>
                            ) : 'Create '} </Button>
                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>
        </div >
    )
}

export default CreatePost