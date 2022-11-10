package com.example.ej9.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ej9.model.Zapato;

@Repository
public interface IZapatoRepository extends JpaRepository<Zapato, Long> {
  
}
