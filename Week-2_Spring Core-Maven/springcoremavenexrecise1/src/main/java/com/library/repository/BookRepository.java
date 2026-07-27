package com.library.repository;

public class BookRepository {

    public BookRepository() {
        System.out.println("BookRepository bean created successfully.");
    }

    public String getBookList() {
        return "Spring in Action, Clean Code, Effective Java";
    }
}
