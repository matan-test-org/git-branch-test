import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { Amplication1ServiceBase } from "./base/amplication1.service.base";

@Injectable()
export class Amplication1Service extends Amplication1ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
