package com.easybites.backend.menu.repository;

import com.easybites.backend.menu.model.Menu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MenuRepository extends JpaRepository<Menu,Integer> {


    List<Menu> findByCategory(String category);
}
