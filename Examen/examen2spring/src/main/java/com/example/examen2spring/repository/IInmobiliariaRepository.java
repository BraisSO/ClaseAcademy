package com.example.examen2spring.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.examen2spring.model.Inmuebles;
    
@Repository
public interface IInmobiliariaRepository extends JpaRepository<Inmuebles,Long> {

    List<Inmuebles> findByLocalidad(String localidad);
    
}


    

