import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
// import { User } from './users.entity';
import { usersSchema } from './users.schema';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([usersSchema])],
  exports: [TypeOrmModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
