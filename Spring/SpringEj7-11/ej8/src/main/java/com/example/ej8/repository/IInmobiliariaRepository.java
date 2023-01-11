package com.example.ej8.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ej8.model.Inmuebles;

@Repository
public interface IInmobiliariaRepository extends JpaRepository<Inmuebles,Long> {
    
}

