import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { BooksResolver } from './books.resolver';
import { BookService } from './books.service';

@Module({
  imports: [PrismaModule],
  providers: [BooksResolver, BookService],
  exports: [BooksResolver, BookService],
})
export class BooksModule {}
