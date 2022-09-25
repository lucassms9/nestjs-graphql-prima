
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class NewBook {
    title: string;
    category: string;
    authorName: string;
}

export class Book {
    title: string;
    category: string;
    author: Author;
}

export class Author {
    name: string;
}

export abstract class IQuery {
    abstract books(): Nullable<Book>[] | Promise<Nullable<Book>[]>;
    abstract bookByCategory(category?: Nullable<string>): Nullable<Book>[] | Promise<Nullable<Book>[]>;
}

export abstract class IMutation {
    abstract createBook(book: NewBook): Book | Promise<Book>;
}

type Nullable<T> = T | null;
