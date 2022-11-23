package com.example.ej13.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ej13.model.Carniceria;

@Repository
public interface ICarniceriaRepository extends JpaRepository<Carniceria, Long> {
    List<Carniceria> findByName(String name);

}
