package com.easybites.backend.order.repository;

import com.easybites.backend.order.model.Orders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Orders, Integer> {

    List<Orders> findAllByStatus(String status);
    List<Orders> findByCustomerEmail(String customerEmail);

    List<Orders> findByDeliveryManAndStatus(String deliveryMan, String status);
}
