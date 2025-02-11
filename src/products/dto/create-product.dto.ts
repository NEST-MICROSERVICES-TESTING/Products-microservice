import { Type } from "class-transformer";
import { IsNumber, IsString, Min } from "class-validator";

export class CreateProductDto {
    @IsString()
    sProduct    : string;

    @IsNumber({maxDecimalPlaces: 4})
    @Min(0)
    @Type(() => Number)
    nPrice      : number;
}
