import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { Amplication1Service } from "./amplication1.service";
import { Amplication1ControllerBase } from "./base/amplication1.controller.base";

@swagger.ApiTags("amplication1s")
@common.Controller("amplication1s")
export class Amplication1Controller extends Amplication1ControllerBase {
  constructor(
    protected readonly service: Amplication1Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
