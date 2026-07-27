package com.library.service;

public class BookService {

    public void addBook(String title) {
        System.out.println("Book added successfully.");
        try {
            Thread.sleep(50); // simulate processing delay
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
}
