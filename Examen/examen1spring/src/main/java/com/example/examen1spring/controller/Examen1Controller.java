package com.example.examen1spring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.examen1spring.service.Examen1Service;


@Controller
public class Examen1Controller {

    @Autowired
    Examen1Service examen1Service;

@GetMapping("/form")
public String formulario(){
    return "form";
}

@PostMapping("/formProcesado")
public String formProcesado(@RequestParam String texto, @RequestParam String seleccion, Model model){
    
    model.addAttribute("texto", texto);

        if(seleccion.equals("maius")){
            model.addAttribute("texto", examen1Service.pasarMaiuscula(texto));
            return "formProcesado";
        }

        else{
            model.addAttribute("texto", examen1Service.pasarMinuscula(texto));
            return "formProcesado";
        }

}

    
}
