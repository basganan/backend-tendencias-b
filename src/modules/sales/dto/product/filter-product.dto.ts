import { PaginationDto } from "../pagination/pagination.dto";

export class ProductFilter extends PaginationDto {


    @IsOptional()
    @IsString(IsStringValidationOptions())
    readonly title;
}