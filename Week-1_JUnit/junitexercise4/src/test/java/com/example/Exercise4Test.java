package com.example;

import static org.junit.Assert.assertEquals;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class Exercise4Test {

    private Calculator calculator;

    @Before
    public void setUp() {
        // Arrange: create and initialize test fixture
        calculator = new Calculator();
    }

    @After
    public void tearDown() {
        // Teardown: clean up the fixture
        calculator = null;
    }

    @Test
    public void testAddWithAaaPattern() {
        // Arrange
        int a = 7;
        int b = 3;

        // Act
        int result = calculator.add(a, b);

        // Assert
        assertEquals(10, result);
    }

    @Test
    public void testSubtractWithAaaPattern() {
        // Arrange
        int a = 10;
        int b = 4;

        // Act
        int result = calculator.subtract(a, b);

        // Assert
        assertEquals(6, result);
    }
}
