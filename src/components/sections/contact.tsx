'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { collection } from 'firebase/firestore';
import { useFirestore, addDocumentNonBlocking } from '@/firebase';

const formSchema = z.object({
  name: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres.' }),
  email: z.string().email({ message: 'Por favor, introduce un email válido.' }),
  message: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres.' }),
});

export default function Contact() {
    const { toast } = useToast();
    const firestore = useFirestore();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            message: '',
        },
    });

    const {formState: { isSubmitting }} = form;

    async function onSubmit(values: z.infer<typeof formSchema>) {
        if (!firestore) {
            toast({
                title: 'Error',
                description: 'La base de datos no está disponible. Por favor, inténtalo de nuevo más tarde.',
                variant: 'destructive',
            });
            return;
        }

        try {
            const submission = {
                ...values,
                submissionDate: new Date().toISOString(),
            };
            const submissionsCollection = collection(firestore, 'contactFormSubmissions');
            await addDocumentNonBlocking(submissionsCollection, submission);
            
            toast({
                title: 'Mensaje Enviado',
                description: 'Gracias por contactarnos. Nos pondremos en contacto contigo pronto.',
            });
            form.reset();
        } catch (error) {
            console.error("Error submitting form:", error);
            toast({
                title: 'Error al enviar',
                description: 'No se pudo guardar tu mensaje. Por favor, inténtalo de nuevo.',
                variant: 'destructive',
            });
        }
    }

    return (
        <section id="contact" className="w-full py-16 md:py-24 lg:py-32 bg-card">
            <div className="container px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
                    <div className="flex flex-col justify-center space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white font-headline">¿Listo para llevar su gestión de riesgos al siguiente nivel?</h2>
                        <p className="max-w-[600px] text-foreground/80 md:text-xl">
                            Hablemos sobre cómo la tecnología y el derecho pueden proteger su visión.
                        </p>
                    </div>

                    <div className="w-full max-w-md mx-auto">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-white">Nombre</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Tu nombre" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-white">Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="tu@email.com" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-white">Mensaje</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="¿Cómo podemos ayudarte?" {...field} rows={5} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                                    {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                    Contactar a un Consultor
                                </Button>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    );
}
