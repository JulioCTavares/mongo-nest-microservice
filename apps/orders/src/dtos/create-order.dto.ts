import { z } from 'zod';

export const CreateOrderDto = z.object({
  name: z.string(),
  price: z.number(),
  phoneNumber: z.string(),
});

export type CreateOrder = z.infer<typeof CreateOrderDto>;
