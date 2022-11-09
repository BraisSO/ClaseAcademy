package com.example.ej8.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.ej8.model.Inmuebles;
import com.example.ej8.service.InmobiliariaService;

@Controller
@RequestMapping
public class FormController {

    @Autowired
   private InmobiliariaService inmobiliariaService;
    
    @GetMapping("/form")
    public String form(Model model){
        model.addAttribute("inmueble", new Inmuebles());
        return "form";
    }
    

    @PostMapping("/guardar")
        public String guardar(Inmuebles inmueble){
            inmobiliariaService.gardarInmueble(inmueble);
            return "redirect:/form";
        }
    }

