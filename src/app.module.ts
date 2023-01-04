import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { PostsModule } from './posts/posts.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [PrismaModule, UsersModule, CategoriesModule, PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
