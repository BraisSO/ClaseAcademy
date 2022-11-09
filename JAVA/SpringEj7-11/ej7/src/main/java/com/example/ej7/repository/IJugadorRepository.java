package com.example.ej7.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ej7.model.Jugador;


@Repository
public interface IJugadorRepository extends JpaRepository<Jugador, Long> {
    
}
