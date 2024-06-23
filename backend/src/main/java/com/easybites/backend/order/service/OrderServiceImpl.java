package com.easybites.backend.order.service;

import com.easybites.backend.order.model.Orders;
import com.easybites.backend.order.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@SuppressWarnings("OptionalGetWithoutIsPresent")
@Service
public class OrderServiceImpl implements OrderService{

    @Autowired
    OrderRepository orderRepository;

    @Override
    public String addOrder(Orders orders) {
        Random random = new Random();
        int otpGen = random.nextInt(9999-1000)+1000;
        orders.setOtp(String.valueOf(otpGen));
        return orderRepository.save(orders).toString();
    }

    @Override
    public List<Orders> getByEmail(String customerEmail) {
        List<Orders> ord=  orderRepository.findByCustomerEmail(customerEmail);
        Collections.reverse(ord);
        return ord;
    }

    @Override
    public String getOrderById(int orderId) {
        return orderRepository.findById(orderId).get().toString();
    }


    @Override
    public List<Orders> getAllOrderByStatus(String status) {
        return orderRepository.findAllByStatus(status);
    }

    @Override
    public List<Orders> getAllByDelivAndStatus(String deliveryMan, String status) {
        return orderRepository.findByDeliveryManAndStatus(deliveryMan,status);
    }

    @Override
    public String updateStatus(Orders order) {
        Orders old = orderRepository.findById(order.getOrderId()).get();

        old.setStatus(order.getStatus());

        return orderRepository.save(old).toString();
    }

    @Override
    public String updateDeliveryAndStatus(Orders order) {
        Orders old = orderRepository.findById(order.getOrderId()).get();
        old.setDeliveryMan(order.getDeliveryMan());
        old.setStatus(order.getStatus());
        return orderRepository.save(old).toString();
    }

    @Override
    public String completeOrder(int id) {
        Orders order = orderRepository.findById(id).get();
        order.setStatus("Complete");
        return orderRepository.save(order).toString();
    }
}
