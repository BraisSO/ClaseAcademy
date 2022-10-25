package com.example.ej5.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/errors")
public class ErrorController {
    @RequestMapping("/unauthorized")
    public String unauthorized(){
        
        return ("errorLogin");

    }
}
