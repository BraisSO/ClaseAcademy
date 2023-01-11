package com.example.cookies.controller;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class LoginController {

    @GetMapping("/form")
    public String form(){
        return "form";
    }
    

    @PostMapping ("/login")
    public String login(@RequestParam String username, HttpServletResponse response){

        if(username.equalsIgnoreCase("Paco")){
            Cookie cookie = new Cookie ("miCookie", username);

            cookie.setMaxAge(3600);
            response.addCookie(cookie);
            return "redirect:/private/home";
        }

        return "redirect:/errores/auth-error";

    }

    @GetMapping("/delete-cookie")
    public String deleteCookie(HttpServletResponse response){
        Cookie cookie = new Cookie("miCookie", null);
        cookie.setMaxAge(0);
        response.addCookie(cookie);

        return "redirect:/login";
    }
}
