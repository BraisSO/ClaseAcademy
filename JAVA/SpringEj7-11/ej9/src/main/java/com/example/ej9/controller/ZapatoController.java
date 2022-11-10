package com.example.ej9.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ej9.model.Zapato;
import com.example.ej9.service.ZapatoService;

@RestController
@RequestMapping("/zapateria")
public class ZapatoController {
    
    @Autowired
    ZapatoService zapatoService;

    @GetMapping("/{id}") 
    public Zapato verZapateria(@PathVariable Long id){
       return zapatoService.buscarPorID(id);
    }

}
