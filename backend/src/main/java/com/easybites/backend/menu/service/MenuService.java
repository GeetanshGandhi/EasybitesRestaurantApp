package com.easybites.backend.menu.service;

import com.easybites.backend.menu.model.Menu;

import java.util.List;

public interface MenuService {
    String AddItem(Menu menu);
    String AddAllItems(List<Menu> menuList);
    List<Menu> getAllItems();
    List<Menu> getItemsByCategory(String category);
    String getItemById(int id);
    List<Menu> getAllById(List<Integer> input);
}
