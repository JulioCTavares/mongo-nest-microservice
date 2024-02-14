import { z } from 'zod';

export const EnvSchema = z.object({
  MONGO_URI: z.string().url(),
});

export type Env = z.infer<typeof EnvSchema>;
