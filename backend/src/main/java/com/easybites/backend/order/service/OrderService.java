package com.easybites.backend.order.service;

import com.easybites.backend.order.model.Orders;

import java.util.List;

public interface OrderService {
    String addOrder(Orders orders);
    List<Orders> getByEmail(String customerEmail);
    String getOrderById(int orderId);
    List<Orders> getAllOrderByStatus(String status);
    List<Orders> getAllByDelivAndStatus(String deliveryMan, String status);
    String updateStatus(Orders order);
    String updateDeliveryAndStatus(Orders order);
    String completeOrder(int id);
}
