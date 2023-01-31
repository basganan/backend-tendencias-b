import { DataSource } from 'typeorm';


// import { DataSourceEnum, RepositoryEnum } from '@shared/enums';
// import { RequirementRequestEntity } from '../entities/requirement-request.entity';

import { PedidoEntity } from 'src/modules/pedido/entities';
import { RepositoryEnum } from 'src/shared/enums';
import { ClienteEntity } from '../entities/cliente.entity';

export const clienteProviders = [
  {
    provide: RepositoryEnum.CLIENTE_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ClienteEntity),
    // inject: [DataSourceEnum.PG_DATA_SOURCE],
  },
  {
    provide: RepositoryEnum.PEDIDO_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(PedidoEntity),
    // inject: [DataSourceEnum.PG_DATA_SOURCE],
  },

]