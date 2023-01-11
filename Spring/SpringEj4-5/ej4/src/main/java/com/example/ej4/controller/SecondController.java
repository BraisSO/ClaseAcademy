package com.example.ej4.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class SecondController {

    @GetMapping("/form")
    public String form(){
        return "form";
    }

    @PostMapping("/formProcesado")
    public String formProcesado(@RequestParam (name="username")String username, @RequestParam(name="email")String email, Model model){
        model.addAttribute("username", username);
        model.addAttribute("email", email);
    
        return "formProcesado";
    }

}
