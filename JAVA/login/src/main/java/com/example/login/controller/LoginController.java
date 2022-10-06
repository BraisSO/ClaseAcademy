package com.example.login.controller;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
public class LoginController {

    @GetMapping("/login")
    public String loginForm() {
        return "login";
    }

    @PostMapping("/login")
    public String login(@RequestParam(name = "username") String username,
            @RequestParam(name = "contraseña") String contraseña, RedirectAttributes flash, HttpSession session) {
        if (username.equals("Paco") && contraseña.equals("1234")) {
            // flash.addFlashAttribute("success", "Bienvenido" + username);
            session.setAttribute("usuario", username);
            return "redirect:/private/home";
        }

        else {
            flash.addFlashAttribute("error", "Usuario no válido " + username);
            return "redirect:/errores/auth-error";
        }
    }

}
