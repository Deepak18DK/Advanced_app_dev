package com.corpify.corpify.service;

import java.util.List;

import com.corpify.corpify.dto.request.UserRequest;
import com.corpify.corpify.dto.response.UserResponse;

public interface UserService {
    List<UserResponse> getAllUsers();
    UserResponse updateUser(UserRequest request, Long uid);
    UserRequest getUserById(Long uid);
    boolean deleteUser(Long id);
}
