package com.example.nuevateoriaspring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ErroresController {

    @GetMapping("/auth-error")
    public String erroresAuth() {
        return "authError";
    }
}
