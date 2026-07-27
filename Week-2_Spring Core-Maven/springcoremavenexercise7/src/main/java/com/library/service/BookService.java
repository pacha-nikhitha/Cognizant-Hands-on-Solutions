package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private BookRepository bookRepository;
    private String serviceName;

    public BookService(String serviceName, BookRepository bookRepository) {
        this.serviceName = serviceName;
        this.bookRepository = bookRepository;
        System.out.println("BookService object created using constructor injection.");
    }

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
        System.out.println("BookRepository injected using setter injection.");
    }

    public void showBooks() {
        bookRepository.getBookList();
    }
}
