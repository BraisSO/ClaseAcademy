package com.example.empresa.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.empresa.model.Empleado;

@Repository
public interface IEmpleadoRepo extends JpaRepository<Empleado, Long> {

    
    
}
