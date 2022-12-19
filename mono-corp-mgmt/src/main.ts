import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import autocannon from 'autocannon';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();

// async function loadTests() {
//   try {
//     const result = await autocannon({
//       url: 'http://localhost:3000',
//       connections: 10, //default
//       pipelining: 1, // default
//       duration: 10, // default
//     });
//     console.log(result);
//   } catch (error) {
//     throw new Error(error);
//   }
// }
