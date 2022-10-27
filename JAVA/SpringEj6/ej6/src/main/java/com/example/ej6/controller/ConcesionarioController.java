package com.example.ej6.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.ej6.model.Coche;
import com.example.ej6.service.CocheService;

@Controller
@RequestMapping("/")
public class ConcesionarioController {
    
    @Autowired
    private CocheService cocheService; 

    
    @GetMapping("/concesionario")
    public String recuperarConcesionario(Model model){
        model.addAttribute("coches", cocheService.encontrarCoches());
        return "concesionario";
    }

    @GetMapping("/form")
    public String form (Model model){
        model.addAttribute("coche", new Coche());
        return "form";
    }

    @PostMapping("/save")
    public String save (Coche coche){
        cocheService.guardarCoche(coche);
        return "redirect:/concesionario";
    }


}
