package com.easybites.backend.user.service;

import com.easybites.backend.user.model.User;

public interface UserService {
    String addUser(User User);
    String loginUser(User user);
}
