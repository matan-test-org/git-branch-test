import { Module } from "@nestjs/common";
import { Amplication1ModuleBase } from "./base/amplication1.module.base";
import { Amplication1Service } from "./amplication1.service";
import { Amplication1Controller } from "./amplication1.controller";
import { Amplication1Resolver } from "./amplication1.resolver";

@Module({
  imports: [Amplication1ModuleBase],
  controllers: [Amplication1Controller],
  providers: [Amplication1Service, Amplication1Resolver],
  exports: [Amplication1Service],
})
export class Amplication1Module {}
