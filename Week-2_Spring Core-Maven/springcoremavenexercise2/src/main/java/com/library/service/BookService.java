package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private BookRepository bookRepository;

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void showBooks() {
        System.out.println("Book Service: Calling Book Repository...");
        String books = bookRepository.getBookList();
        System.out.println("Book Repository: Book data retrieved successfully.");
        System.out.println("Available books: " + books);
    }
}
