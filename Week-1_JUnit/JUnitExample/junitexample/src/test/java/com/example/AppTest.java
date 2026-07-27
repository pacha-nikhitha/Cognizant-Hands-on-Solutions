package com.example;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

public class AppTest {

    Calculator c = new Calculator();

    @Test
    void testAdd() {
        assertEquals(15, c.add(10, 5));
    }

    @Test
    void testSubtract() {
        assertEquals(5, c.subtract(10, 5));
    }
}