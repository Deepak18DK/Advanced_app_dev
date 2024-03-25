package com.corpify.corpify.controller;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.corpify.corpify.Api.Api;
import com.corpify.corpify.dto.request.UserRequest;
import com.corpify.corpify.dto.response.UserResponse;
import com.corpify.corpify.service.UserService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;


@RestController
@Tag(name="User Details")
@RequiredArgsConstructor
@RequestMapping(Api.USER)
@CrossOrigin
public class UserController {
private final UserService userService;

    @GetMapping("/getAllUsers")
	public ResponseEntity<List<UserResponse>> getAllUsers() {
        List<UserResponse> userList = userService.getAllUsers();
        return !userList.isEmpty() ? ResponseEntity.ok().body(userList) : ResponseEntity.noContent().build();
    }
	
	
	@GetMapping("/getById/{uid}")
	 public ResponseEntity<UserRequest> getUser(@PathVariable Long uid) {
        UserRequest userResponse = userService.getUserById(uid);
        return userResponse != null ? ResponseEntity.ok().body(userResponse) : ResponseEntity.notFound().build();
    }
	
	@PutMapping("/update/{uid}")
    public ResponseEntity<UserResponse> updateUser(@RequestBody UserRequest request, @PathVariable Long uid) {
        UserResponse userResponse = userService.updateUser(request, uid);
        return userResponse != null ? ResponseEntity.ok().body(userResponse) : ResponseEntity.notFound().build();
    }
	
	@DeleteMapping("/deleteUser/{id}")
	public ResponseEntity<String>  deleteUser(@PathVariable Long id)
	{
		boolean isDeleted=userService.deleteUser(id);
		return isDeleted ? ResponseEntity.ok().body("User deleted successfully!")
                : ResponseEntity.notFound().build();
	}
}
