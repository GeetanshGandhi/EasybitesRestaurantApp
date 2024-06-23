package com.easybites.backend.menu.service;

import com.easybites.backend.menu.model.Menu;
import com.easybites.backend.menu.repository.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Objects;

@Service
public class MenuServiceImpl implements MenuService {
    @Autowired
    MenuRepository menuRepository;
    @Override
    public List<Menu> getAllItems() {
        return menuRepository.findAll();
    }

    @Override
    public List<Menu> getItemsByCategory(String category) {
        return menuRepository.findByCategory(category);
    }

    @SuppressWarnings("OptionalGetWithoutIsPresent")
    @Override
    public String getItemById(int id) {
        try{
            return menuRepository.findById(id).get().toString();
        } catch (NoSuchElementException e){
            return "Item not Found";
        }
    }

    @Override
    public List<Menu> getAllById(List<Integer> input) {
        return menuRepository.findAllById(input);
    }

    @Override
    public String AddItem(Menu menu) {
        return menuRepository.save(menu).toString();
    }

    @Override
    public String AddAllItems(List<Menu> menuList){
        return menuRepository.saveAll(menuList).toString();
    }
}

