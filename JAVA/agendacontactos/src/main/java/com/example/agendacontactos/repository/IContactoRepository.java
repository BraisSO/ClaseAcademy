package com.example.agendacontactos.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.agendacontactos.model.Contacto;

@Repository
public interface IContactoRepository extends JpaRepository<Contacto, Long> {
    
}
