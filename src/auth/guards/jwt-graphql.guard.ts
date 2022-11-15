import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtGraphQLGuard extends AuthGuard('jwt') {
  getRequest(context: ExecutionContext) {
    const cxt = GqlExecutionContext.create(context);
    return cxt.getContext().req;
  }
}
