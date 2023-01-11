package com.example.prueba.prueba.Controller;

import org.springframework.context.annotation.Conditional;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
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
    public String getForm(Model model, @RequestParam(name="username")String usuario){

        model.addAttribute("user", usuario);

        return "home";
    }

}
