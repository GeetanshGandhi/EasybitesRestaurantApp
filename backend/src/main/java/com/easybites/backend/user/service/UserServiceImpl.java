package com.easybites.backend.user.service;

import com.easybites.backend.user.model.User;
import com.easybites.backend.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Objects;
import java.util.Optional;
import java.util.regex.Pattern;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    UserRepository userRepository;

    @Override
    public String addUser(User user) {
        if(user.getMobile().length() != 10){
            return "Invalid Mobile";
        }
        for(int i = 0; i<10; i++){
            if(!Character.isDigit(user.getMobile().charAt(i))) return "Invalid Mobile";
        }
        if(!isPasswordValid(user.getPassword())){
            return "Invalid Password";
        }
        if(userExists(user.getEmail())){
            return "User Exists";
        }
        userRepository.save(user);
        return "success";
    }

    @Override
    public String loginUser(User user) {
        List<User> existing = userRepository.findAll();
        for(User i: existing){
            if(Objects.equals(i.getEmail(),user.getEmail())){
                if(Objects.equals(i.getPassword(),user.getPassword())) return i.toString();
                return "Invalid Password";
            }
        }
        return "No User";
    }

    public static boolean isPasswordValid(String password) {
        if (password == null || password.length() < 8 || password.length()>16)
            return false;
        else {
            String uppercaseRegex = ".*[A-Z].*";
            String lowercaseRegex = ".*[a-z].*";
            String digitRegex = ".*\\d.*";
            String specialCharRegex = ".*[@#$%^&!/].*";

            boolean hasUppercase = Pattern.matches(uppercaseRegex, password);
            boolean hasLowercase = Pattern.matches(lowercaseRegex, password);
            boolean hasDigit = Pattern.matches(digitRegex, password);
            boolean hasSpecialChar = Pattern.matches(specialCharRegex, password);

            return hasUppercase && hasLowercase && hasDigit && hasSpecialChar;
        }
    }

    //check if user exists
    boolean userExists(String email){
        return userRepository.findById(email).isPresent();
    }
}
