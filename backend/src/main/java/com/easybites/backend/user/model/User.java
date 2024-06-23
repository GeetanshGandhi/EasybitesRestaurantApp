package com.easybites.backend.user.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class User {
    @Id
    private String email;
    private String name;
    private String password;
    private String address;
    private String mobile;
    private String category;

    //constructor
    public User(){}

    //getter setter

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    @Override
    public String toString() {
        return "{" +
                "\"email\":\"" + email + '\"' +
                ", \"name\":\"" + name + '\"' +
                ", \"password\":\"" + password + '\"' +
                ", \"address\":\"" + address + '\"' +
                ", \"mobile\":\"" + mobile + '\"' +
                ", \"category\":\"" + category + '\"' +
                '}';
    }
}
