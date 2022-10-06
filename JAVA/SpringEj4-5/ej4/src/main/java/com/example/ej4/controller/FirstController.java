package com.example.ej4.controller;

import java.lang.ProcessBuilder.Redirect;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class FirstController {

    @GetMapping("/enlaces")
    public String enlaces() {
        return "enlaces";
    }


    @GetMapping("/enlacesRespuesta")
    public String enlaces(Model model, @RequestParam int id) {

       model.addAttribute("id", id);
       

        return "enlacesRespuesta";
    }

}
