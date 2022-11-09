package com.example.ej7.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ej7.model.Jugador;
import com.example.ej7.repository.IJugadorRepository;

@Service
public class JugadorService {

    @Autowired
    private IJugadorRepository jugadorRepository;


public List<Jugador> findJugador(){
    return jugadorRepository.findAll();
}


}
