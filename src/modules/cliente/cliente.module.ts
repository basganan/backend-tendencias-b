import { Global, Module } from '@nestjs/common';
import { clienteProviders } from './providers';

// import {DatabaseModule} from "@database";

@Global()
@Module({
  // imports: [DatabaseModule],
  controllers: [],
  providers: [...clienteProviders],
})
export class ClienteModule {}
