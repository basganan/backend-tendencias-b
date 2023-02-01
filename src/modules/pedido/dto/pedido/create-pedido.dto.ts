import { IsString, MinLength, MaxLength, IsNotEmpty } from 'class-validator';
import { BasePedidoDto } from './base-pedido.dto';
import { isNotEmptyValidationOpntions, IsStringValidationOpntions,IsPositiveValidationOpntions } from '@shared/validation'

export class PedidoCreate extends BasePedidotDto {
  @IsString()
  @MinLength(5)
  @MaxLength(40)
  @IsNotEmpty(isNotEmptyValidationOpntions())
  @IsString(IsStringValidationOpntions())
  readonly name: string;

  @IsNotEmpty(isNotEmptyValidationOpntions())
  @IsString(IsStringValidationOpntions())
  // @isPositive(IsPositiveValidationOpntions())
  readonly price: number;

  @IsString()
  @MinLength(10)
  @MaxLength(60)
  @IsNotEmpty(isNotEmptyValidationOpntions())
  @IsString(IsStringValidationOpntions())
  readonly descuento: string;

  @IsString()
  @MinLength(3)
  @MaxLength(100)
  @IsNotEmpty(isNotEmptyValidationOpntions())
  @IsString(IsStringValidationOpntions())
  readonly description: string[];
}
function IsStringValidationOpntions(): any {
  throw new Error('Function not implemented.');
}

function isNotEmptyValidationOpntions(): import('class-validator').ValidationOptions {
  throw new Error('Function not implemented.');
}
