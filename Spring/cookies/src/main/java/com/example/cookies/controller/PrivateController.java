package com.example.cookies.controller;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
@RequestMapping("/private")
public class PrivateController {
    @GetMapping("/home")
    public String home(HttpServletRequest request) {
        Cookie[] cookies = request.getCookies();
        if (cookies!=null) {
        for (Cookie cookie : cookies) {
            if (cookie.getName().equalsIgnoreCase("miCookie")) {
                return "home";
            }
        }
    }
        return "redirect:/errores/auth-error";
    }
}