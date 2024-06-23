package com.easybites.backend.menu.controller;

import com.easybites.backend.menu.model.Menu;
import com.easybites.backend.menu.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("api/v1/menu")
public class MenuController{
    @Autowired
    MenuService menuService;

    @PostMapping("/add")
    public String addItem(@RequestBody Menu menu){
        return menuService.AddItem(menu);
    }

    @PostMapping("/addAll")
    public String addAllItems(@RequestBody List<Menu> menuList){
        return menuService.AddAllItems(menuList);
    }

    @GetMapping("/getAll")
    public List<Menu> getAllItems(){
        return menuService.getAllItems();
    }

    @PostMapping("/getByCategory")
    public List<Menu> getItemsByCat(@RequestBody String category){
        return menuService.getItemsByCategory(category);
    }

    @PostMapping("/getById")
    public String getItemsById(@RequestBody int id){
        return menuService.getItemById(id);
    }

    @PostMapping("/getAllById")
    public List<Menu> getAllById(@RequestBody List<Integer> input){
        return menuService.getAllById(input);
    }
}
