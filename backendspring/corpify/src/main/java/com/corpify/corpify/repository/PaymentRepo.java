package com.corpify.corpify.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.corpify.corpify.model.Payment;

public interface PaymentRepo extends JpaRepository<Payment,Long> {

     List<Payment> findByUserUid(Long userId);
    void deleteByPid(Long pid);
}
