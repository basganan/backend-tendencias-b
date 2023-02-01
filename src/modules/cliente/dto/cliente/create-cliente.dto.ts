import { IsNotEmpty, IsString, IsIn } from "class-validator";
import { BaseClientetDto } from "./base-cliente.dto";
import { isNotEmptyValidationOpntions, IsStringValidationOpntions,IsPositiveValidationOpntions } from '@shared/validation'


export class ClienteCreate extends BaseClientetDto {
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

}

function isNotEmptyValidationOpntions(): any {
    throw new Error("Function not implemented.");
}
