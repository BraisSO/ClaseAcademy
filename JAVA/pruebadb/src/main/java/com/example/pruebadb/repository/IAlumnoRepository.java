package com.example.pruebadb.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.pruebadb.model.Alumno;

@Repository
public interface IAlumnoRepository extends JpaRepository<Alumno,Long> {
    
}
