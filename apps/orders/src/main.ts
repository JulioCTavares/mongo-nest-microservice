import { NestFactory } from '@nestjs/core';
import { OrdersModule } from './orders.module';
import { Env } from './env';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(OrdersModule);
  const configService = app.get<ConfigService<Env, true>>(ConfigService);

  const port = configService.getOrThrow('PORT', { infer: true });
  await app.listen(port);
}
bootstrap();
