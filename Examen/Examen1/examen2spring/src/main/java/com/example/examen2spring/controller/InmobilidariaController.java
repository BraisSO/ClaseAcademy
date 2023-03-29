package com.example.examen2spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.examen2spring.model.Inmuebles;
import com.example.examen2spring.service.InmobiliariaService;


@RestController
@RequestMapping("/api")
public class InmobilidariaController {

    @Autowired
   private InmobiliariaService inmobiliariaService;
    
    @GetMapping("/vivienda/list")
    public List<Inmuebles> encontrarInmuebles(){
        return inmobiliariaService.listarInmuebles();
    }
    
    
    @GetMapping("/viviendaa/{localidad}")
    public List<Inmuebles> encontrarPorLocalidad(@PathVariable String localidad){
        return inmobiliariaService.encontrarPorLocalidad(localidad);
    }


    @GetMapping("/vivienda/{id}")
    public Inmuebles buscarRegistro(@PathVariable Long id){
        return inmobiliariaService.encontrarPorId(id);
    }
}

 


