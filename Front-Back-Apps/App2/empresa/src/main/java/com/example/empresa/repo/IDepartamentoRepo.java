package com.example.empresa.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.empresa.model.Departamento;

@Repository
public interface IDepartamentoRepo extends JpaRepository<Departamento,Long> {
  
}
