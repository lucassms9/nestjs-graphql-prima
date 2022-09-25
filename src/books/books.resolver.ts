import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import type { NewBook } from '../graphql.schema';

import { BookService } from './books.service';
@Resolver()
export class BooksResolver {
  constructor(private readonly messageService: BookService) {}

  @Query()
  books() {
    return this.messageService.books();
  }

  @Query()
  bookByCategory(@Args('category') args: string) {
    return this.messageService.getBookByCategory(args);
  }

  @Mutation()
  createBook(@Args('book') args: NewBook) {
    return this.messageService.createBook(args);
  }
}
