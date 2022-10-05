package com.example.nuevateoriaspring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class FormController {
    
    @GetMapping("/form")
    public String form(){
        return "form";
    }

    @PostMapping("/post-form")
    public String formPost(@RequestParam String username, @RequestParam String contraseña){
        System.out.println(username);
        System.out.println(contraseña);
        return "home";
    }
}
