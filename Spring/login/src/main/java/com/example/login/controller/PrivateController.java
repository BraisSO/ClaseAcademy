package com.example.login.controller;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/private")
public class PrivateController {
    
    @GetMapping("/home")
    public String home(HttpSession session, Model model){

        if(session.getAttribute("usuario")==null){
            return "redirect:/errores/auth-error";
        } 

        model.addAttribute("usuarioValido",   session.getAttribute("usuario"));
        return "home";
    }
}
