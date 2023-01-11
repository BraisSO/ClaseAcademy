package com.example.ej7.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ej7.service.JugadorService;

@RestController
@RequestMapping("/lista")
public class JSONJugadoresController {

    @Autowired
    private JugadorService jugadorService;

    @GetMapping("/jugadores")
    public List findJugadores(){

        return  jugadorService.findJugador();

    }
}
