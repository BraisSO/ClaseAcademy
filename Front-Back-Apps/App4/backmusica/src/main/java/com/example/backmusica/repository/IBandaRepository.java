package com.example.backmusica.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backmusica.model.Banda;

@Repository
public interface IBandaRepository extends JpaRepository<Banda,Long> {
    
    List<Banda> findByNombre(String nombre);
}
