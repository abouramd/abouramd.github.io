



"use client"
import {
    useTransition
} from "react"
import {
    toast
} from "sonner"
import {
    useForm
} from "react-hook-form"
import {
    zodResolver
} from "@hookform/resolvers/zod"
import * as z from "zod"

import {
    Button
} from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Input
} from "@/components/ui/input"
import {
    Textarea
} from "@/components/ui/textarea"

import { motion } from "framer-motion"
import { formSchema } from "../_lib/Zod";

export default function Contact() {

    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        startTransition(async () => {
            try {

                const responce = await fetch("https://formspree.io/f/xkgwogzw", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(values),
                });

                const data = await responce.json();

                if (data?.ok) {
                    toast.success("Message sent successfully");
                    form.reset({ Name: "", Email: "", Message: "" });
                } else {
                    toast.error(data?.error || "Failed to send message");
                }

            } catch (error) {
                toast.error((error as Error).message || 'Failed to send message');
            }
        });
    }

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            id="contact" className="py-32">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-violet-900 to-violet-700 dark:from-violet-100 dark:to-violet-300 bg-clip-text text-transparent">
                Contact Me
            </motion.h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 max-w-3xl mx-auto py-10">


                    <FormField
                        control={form.control}
                        name="Name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Ex: Abdelhay bouramdane"

                                        type=""
                                        {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="Email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Ex: abdelhaybouramdane@gmail.com"

                                        type="email"
                                        {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="Message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Hi, How are you?"
                                        className="resize-none"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit"
                        className="w-full h-12 rounded-xl bg-violet-900 text-white hover:bg-violet-800 dark:bg-violet-100 dark:text-violet-900 dark:hover:bg-violet-200"
                        disabled={isPending}>{isPending ? "Sending..." : "Send Message"}</Button>
                </form>
            </Form>
        </motion.section>
    );
}