package com.example.ej11.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.ej11.service.ZapatoService;

@Controller
@RequestMapping("/zapateria")
public class ZapatoController {
    
    @Autowired
    ZapatoService zapatoService;

    @GetMapping("/{id}") 
    public String verZapateria(@PathVariable Long id, Model model){

       model.addAttribute("zapato", zapatoService.buscarPorID(id));

       return "vistaZapateria";

    }

    @GetMapping("/catalogo")
    public String verTodaZapateria(Model model){
        model.addAttribute("zapatos", zapatoService.buscarTodos());
        return "vistaZapateria";
    }
}
