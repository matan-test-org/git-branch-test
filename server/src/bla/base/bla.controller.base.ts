/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { BlaService } from "../bla.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { BlaCreateInput } from "./BlaCreateInput";
import { BlaWhereInput } from "./BlaWhereInput";
import { BlaWhereUniqueInput } from "./BlaWhereUniqueInput";
import { BlaFindManyArgs } from "./BlaFindManyArgs";
import { BlaUpdateInput } from "./BlaUpdateInput";
import { Bla } from "./Bla";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class BlaControllerBase {
  constructor(
    protected readonly service: BlaService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Bla",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Bla })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: BlaCreateInput): Promise<Bla> {
    return await this.service.create({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Bla",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [Bla] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(BlaFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Bla[]> {
    const args = plainToClass(BlaFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Bla",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Bla })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: BlaWhereUniqueInput
  ): Promise<Bla | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Bla",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Bla })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: BlaWhereUniqueInput,
    @common.Body() data: BlaUpdateInput
  ): Promise<Bla | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @nestAccessControl.UseRoles({
    resource: "Bla",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Bla })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: BlaWhereUniqueInput
  ): Promise<Bla | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
