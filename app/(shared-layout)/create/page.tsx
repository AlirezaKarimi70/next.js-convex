'use client'
import { BlogSchema } from '@/app/schema/blog'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Spinner } from '@/components/ui/spinner'
import { Textarea } from '@/components/ui/textarea'
import { api } from '@/convex/_generated/api'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from 'convex/react'
import { useRouter } from 'next/navigation'
import React, { useTransition } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

function CreatePost() {
    const mutation = useMutation(api.posts.createPost)
    const [isPending, startTransition] = useTransition()
    const router = useRouter()
    const form = useForm({
        resolver: zodResolver(BlogSchema),
        defaultValues: {
            title: "",
            content: "",
        }
    })
    function onSubmit(data: z.infer<typeof BlogSchema>) {
        startTransition(async () => {
            console.table(data)
            await mutation({
                title: data.title,
                content: data.content,
                //   authorId: '123', // Replace with actual author ID
            })
            toast.success('Post created successfully');
            router.push('/')
        })
    }
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
                    <form onSubmit={form.handleSubmit(onSubmit)}>
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
                            <Button> {isPending ? (
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