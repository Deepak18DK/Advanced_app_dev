package com.corpify.corpify.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.corpify.corpify.model.Booking;

public interface BookingRepo extends JpaRepository<Booking,Long>{
    List<Booking> findByUserUid(Long userId);

}
