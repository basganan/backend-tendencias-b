import { IsNotEmpty } from 'class-validator';
import {
    IsIn,
  isPositive,
  IsString,
} from 'class-validator/types/decorator/decorators';
import { PedidoEntity } from 'src/modules/pedido/entities';
import { ClienteEntity } from '../../entities/cliente.entity';
// import { isNotEmptyValidationOpntions, IsStringValidationOpntions,IsPositiveValidationOpntions } from '@shared/validation'
import { isNotEmptyValidationOpntions, IsStringValidationOpntions,IsPositiveValidationOpntions } from '@shared/validation'


export class BaseClientetDto {
  @IsNotEmpty()
  @IsString()
  @IsIn([])
  @IsNotEmpty(isNotEmptyValidationOpntions())
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  @IsIn([])
  @IsNotEmpty(isNotEmptyValidationOpntions())
  readonly edad: number;

  @IsNotEmpty()
  @IsString()
  @IsIn([])
  @IsNotEmpty(isNotEmptyValidationOpntions())
  readonly cedula: number;

  @IsNotEmpty()
  @IsString()
  @IsIn([])
  @IsNotEmpty(isNotEmptyValidationOpntions())
  readonly nacionalidad: string;


}

function isNotEmptyValidationOpntions(): import('class-validator').ValidationOptions {
  throw new Error('Function not implemented.');
}

function IsStringValidationOpntions(): import('class-validator').ValidationOptions {
  throw new Error('Function not implemented.');
}

function IsPositiveValidationOpntions(): unknown {
  throw new Error('Function not implemented.');
}
