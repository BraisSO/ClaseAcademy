package com.example.ej8.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.example.ej8.model.Inmuebles;
import com.example.ej8.service.InmobiliariaService;

@Controller
public class FormController {

    @Autowired
    InmobiliariaService inmobiliariaService;
    
    @GetMapping("/form")
    public String form(Model model){
        model.addAttribute("inmueble", new Inmuebles());
        return "form";
    }
    

    @GetMapping("/guardar")
        public String guardar(Inmuebles inmueble){
            inmobiliariaService.gardarInmueble(inmueble);
            return "redirect:/form";
        }
    }
//falta vincular o de gardar o formulario
// Esto faciase creando unha instancia vacia e enchendoa cos campos do formulario e logo usando a funcion de gardar
//o form ten que estar vinculado a funcion de guardar e pasarlle os datos vinculados o obxeto vacio

