package com.example.nuevateoriaspring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
public class HomeController {
    
    @GetMapping("/form1")
    public String form() {
        return "form1";
    }


    @GetMapping("/home1")
    public String home() {
        return "home1";
    }

    @PostMapping("/login")
    public String formPost(@RequestParam String username, @RequestParam String password, RedirectAttributes flash) {
    
        
        /*
         * mensajes flash: envias un mensaje al servidor, y al ser flash una vez enviado se autodestruyes
         * ejemplo: haces un login y entras, pero si le das a refresh ya logueado, el atributo ya no existe
         * la informacion de login se borra
         */
        if (username.equals("Brais") && password.equals("1234")) {
            flash.addFlashAttribute("usuario", username);
            return "redirect:/home1";
        } else {
            return "redirect:/auth-error";
        }
    }

}
