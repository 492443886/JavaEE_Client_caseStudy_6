package com.info5059.casestudy.product;
public class ExpenseNotFoundException extends RuntimeException {
    public ExpenseNotFoundException(String exception) {
        super(exception);
    }
}