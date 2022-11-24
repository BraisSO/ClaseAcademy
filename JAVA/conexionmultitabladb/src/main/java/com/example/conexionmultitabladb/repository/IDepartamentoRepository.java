package com.example.conexionmultitabladb.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.conexionmultitabladb.model.Departamento;

@Repository
public interface IDepartamentoRepository extends JpaRepository<Departamento,Long> {
    
}
