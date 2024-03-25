package com.corpify.corpify.service;

import com.corpify.corpify.dto.request.LoginRequest;
import com.corpify.corpify.dto.request.RegisterRequest;
import com.corpify.corpify.dto.response.LoginResponse;

public interface AuthService {
     String register(RegisterRequest registerRequest);

    LoginResponse login(LoginRequest loginRequest);

    String createAdmin();
} 
