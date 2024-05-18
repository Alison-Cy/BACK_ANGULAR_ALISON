import { AuthGuard } from "@nestjs/passport";

export class jwtAuthGuard extends AuthGuard('jwt'){}