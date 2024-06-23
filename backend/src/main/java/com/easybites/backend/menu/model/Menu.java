package com.easybites.backend.menu.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Menu {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int itemId;
    private String name;
    private String category;
    private int price;

    //constructor
    public Menu(){}

    //constructors
    public int getItemId() {
        return itemId;
    }

    public void setItemId(int itemId) {
        this.itemId = itemId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    //to string

    @Override
    public String toString() {
        return "{" +
                "\"itemId\":" + itemId +
                ", \"name\":\"" + name + '\"' +
                ", \"category\":\"" + category + '\"' +
                ", \"price\":" + price +
                '}';
    }
}
