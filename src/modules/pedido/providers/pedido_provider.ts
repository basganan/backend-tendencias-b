import { DataSource } from 'typeorm';



// import { RequirementRequestEntity } from '../entities/requirement-request.entity';
import { PedidoEntity } from '../entities';
import { RepositoryEnum } from 'src/shared/enums';
import { ClienteEntity } from 'src/modules/cliente/entities/cliente.entity';

export const pedidoProviders = [
  {
    provide: RepositoryEnum.PEDIDO_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(PedidoEntity),
    // inject: [DataSourceEnum.PG_DATA_SOURCE],
  },
  {
    provide: RepositoryEnum.CLIENTE_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ClienteEntity),
    // inject: [DataSourceEnum.PG_DATA_SOURCE],
  },

]