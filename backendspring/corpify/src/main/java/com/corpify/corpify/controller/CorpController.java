package com.corpify.corpify.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CorpController {

    @GetMapping("/hello")
    public String Hello()
    {
        return "Hello World !";
    }

}
