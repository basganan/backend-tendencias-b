import { Global, Module } from "@nestjs/common";
import { pedidoProviders } from './providers';
// import {DatabaseModule} from "@database";

@Global()
@Module({
  // imports: [DatabaseModule],
  controllers: [],
  providers: [...pedidoProviders],
})
export class PedidoModule {}
