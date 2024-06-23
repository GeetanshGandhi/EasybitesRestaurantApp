package com.easybites.backend.order.controller;

import com.easybites.backend.order.model.Orders;
import com.easybites.backend.order.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/v1/order")
public class OrderController {

    @Autowired
    OrderService orderService;

    @PostMapping("/add")
    public String addOrder(@RequestBody Orders orders){
        return orderService.addOrder(orders);
    }

    @PostMapping("/getByEmail")
    public List<Orders> getOrderByEmail(@RequestBody String email){
        return orderService.getByEmail(email);
    }

    @PostMapping("/getByStatus")
    public List<Orders> getOrderByStatus(@RequestBody String status){
        return orderService.getAllOrderByStatus(status);
    }

    @PostMapping("/getByDelivAndStat")
    public List<Orders> getOrdersByDeliveryManAndStatus(@RequestBody List<String> input){
        return orderService.getAllByDelivAndStatus(input.get(0), input.get(1));
    }

    @PostMapping("/updateStat")
    public String updateStatus(@RequestBody Orders order){
        return orderService.updateStatus(order);
    }

    @PostMapping("/updateStatAndDeliv")
    public String updateDeliveryAndStatus(@RequestBody Orders order){
        return orderService.updateDeliveryAndStatus(order);
    }

    @PostMapping("/complete")
    public String completeOrder(@RequestBody int id){
        return orderService.completeOrder(id);
    }
}
