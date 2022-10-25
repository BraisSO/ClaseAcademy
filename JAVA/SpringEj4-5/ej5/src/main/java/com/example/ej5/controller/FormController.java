package com.example.ej5.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
@RequestMapping("/")
public class FormController {

    @GetMapping("/form")
    public String form() {

        return ("form");

    }

    @GetMapping("/formProcesado")
    public String formProcesado(@RequestParam (name="username")String username, @RequestParam(name="password") String password, Model model, RedirectAttributes flash) {
        if (username.equals("Pepe")&& password.equals("1234")){
            model.addAttribute("username", username);
            return ("home");
        }

        else{
            flash.addFlashAttribute("error", "Usuario no válido " + username);
            return "redirect:/errors/unauthorized";
        }



    }
    

}
