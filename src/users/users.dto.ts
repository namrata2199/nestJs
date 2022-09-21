import {
  IsDefined,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export enum UserGrade {
  A = 'A',
  B = 'B',
  C = 'C',
  Aplus = 'A+',
}

export class UsersDTO {
  @IsOptional()
  id: number;
  @IsString()
  @IsDefined()
  name: string;
  @IsNumber()
  @IsDefined()
  @Min(18)
  age: number;
  @IsEnum(UserGrade)
  grade: UserGrade;
}
