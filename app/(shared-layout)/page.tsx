"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { BookOpen, HomeIcon, PenTool } from "lucide-react";
import Link from "next/link";

export default function Home() {
    const tasks = useQuery(api.tasks.get);
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {tasks?.map(({ _id, text }: { _id: string; text: string }) => <div key={_id}>{text}</div>)}
        </main>
    );
}