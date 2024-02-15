import { z } from 'zod';

export const EnvSchema = z.object({
  MONGODB_URI: z.string().url(),
  PORT: z.coerce.number().optional().default(3333),
});

export type Env = z.infer<typeof EnvSchema>;
