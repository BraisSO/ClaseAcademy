package com.example.ej12.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ej12.model.Carniceria;

@Repository
public interface ICarniceriaRepository extends JpaRepository<Carniceria, Long> {
    
}
