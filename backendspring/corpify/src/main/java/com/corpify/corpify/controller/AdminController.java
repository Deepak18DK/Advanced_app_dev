package com.corpify.corpify.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.corpify.corpify.service.AuthService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/admin/default")
public class AdminController {

    private final AuthService authService;

        @PostMapping
        public ResponseEntity<?> createAdmin() {
            try {
         
                return new ResponseEntity<>(authService.createAdmin(), HttpStatus.CREATED);
            } catch (Exception e) {
                return ResponseEntity.notFound().build();
            }
        }
}
