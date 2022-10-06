package com.example.login.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/errores")
public class ErrorController {
    
    @GetMapping("/auth-error")
    public String authError(){
        return "authError";
    }
}
