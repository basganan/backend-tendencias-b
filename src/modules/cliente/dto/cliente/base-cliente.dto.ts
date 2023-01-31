import { IsNotEmpty } from "class-validator";
import { isPositive, IsString } from "class-validator/types/decorator/decorators";
import { PedidoEntity } from "src/modules/pedido/entities";
// import { isNotEmptyValidationOpntions, IsStringValidationOpntions,IsPositiveValidationOpntions } from '@shared/validation'
export  class BaseClientetDto{

    @IsNotEmpty(isNotEmptyValidationOpntions())
    @IsString(IsStringValidationOpntions())
    readonly name:string;


    @IsNotEmpty(isNotEmptyValidationOpntions())
    @IsString(IsStringValidationOpntions())
    readonly product:PedidoEntity[];
    
}

function isNotEmptyValidationOpntions(): import("class-validator").ValidationOptions {
    throw new Error("Function not implemented.");
}


function IsStringValidationOpntions(): import("class-validator").ValidationOptions {
    throw new Error("Function not implemented.");
}


function IsPositiveValidationOpntions(): unknown {
    throw new Error("Function not implemented.");
}
