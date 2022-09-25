import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { NewBook } from 'src/graphql.schema';
import { Book } from 'src/../prisma/client';

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}

  // Get multiple messages
  async books(): Promise<Book[]> {
    return this.prisma.book.findMany({});
  }

  // get message by search
  async getBookByCategory(category): Promise<Book[]> {
    const books = this.prisma.book.findMany({
      where: {
        category: {
          contains: category,
        },
      },
    });
    return books;
  }

  // Create a message
  async createBook(book: NewBook): Promise<Book> {
    const authorId = await this.getAuthorId(book.authorName);

    const createBook = await this.prisma.book.create({
      data: {
        category: book.category,
        title: book.title,
        authorId: authorId,
      },
      include: {
        author: true,
      },
    });

    return createBook;
  }

  async getAuthorId(authorName) {
    const getAuthor = await this.prisma.author.findFirst({
      where: {
        name: authorName,
      },
    });

    if (getAuthor) {
      return getAuthor.id;
    }

    const createAuthor = await this.prisma.author.create({
      data: {
        name: authorName,
      },
    });
    return createAuthor.id;
  }
}
