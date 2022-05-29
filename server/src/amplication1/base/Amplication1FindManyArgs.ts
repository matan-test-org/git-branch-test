/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Amplication1WhereInput } from "./Amplication1WhereInput";
import { Type } from "class-transformer";
import { Amplication1OrderByInput } from "./Amplication1OrderByInput";

@ArgsType()
class Amplication1FindManyArgs {
  @ApiProperty({
    required: false,
    type: () => Amplication1WhereInput,
  })
  @Field(() => Amplication1WhereInput, { nullable: true })
  @Type(() => Amplication1WhereInput)
  where?: Amplication1WhereInput;

  @ApiProperty({
    required: false,
    type: [Amplication1OrderByInput],
  })
  @Field(() => [Amplication1OrderByInput], { nullable: true })
  @Type(() => Amplication1OrderByInput)
  orderBy?: Array<Amplication1OrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { Amplication1FindManyArgs };
