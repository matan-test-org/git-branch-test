import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { Amplication1ResolverBase } from "./base/amplication1.resolver.base";
import { Amplication1 } from "./base/Amplication1";
import { Amplication1Service } from "./amplication1.service";

@graphql.Resolver(() => Amplication1)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class Amplication1Resolver extends Amplication1ResolverBase {
  constructor(
    protected readonly service: Amplication1Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
