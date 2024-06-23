package com.easybites.backend.user.controller;

import com.easybites.backend.user.model.User;
import com.easybites.backend.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/v1/user")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/add")
    public String addUser(@RequestBody User user){
        return userService.addUser(user);
    }

    @PostMapping("/login")
    public String login(@RequestBody User user){
        return userService.loginUser(user);
    }
}
