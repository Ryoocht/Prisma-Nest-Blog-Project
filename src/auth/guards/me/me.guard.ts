import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Me = createParamDecorator(
  async (data: unknown, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    return request.user;
  },
);
