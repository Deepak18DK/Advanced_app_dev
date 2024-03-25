package com.corpify.corpify.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.corpify.corpify.model.User;

public interface UserRepo extends JpaRepository<User, Long>{
    Optional<User> findByEmail(String email);

    User findByUid(Long uid);

    void deleteByUid(Long uid);
} 
