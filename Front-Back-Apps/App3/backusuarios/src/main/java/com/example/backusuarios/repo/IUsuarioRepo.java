package com.example.backusuarios.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backusuarios.model.Usuario;

@Repository
public interface IUsuarioRepo extends JpaRepository<Usuario, Long> {
    
    //Buscar por nombre
    public List<Usuario> findByUsername(String username);
}
