import z from 'zod';

const formSchema = z.object({
    Name: z.string().min(3).max(40).trim(),
    Email: z.string().email().trim(),
    Message: z.string().min(10).max(500),
});

export { formSchema };
