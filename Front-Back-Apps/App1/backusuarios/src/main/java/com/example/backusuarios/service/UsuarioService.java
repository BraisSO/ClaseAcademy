package com.example.backusuarios.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backusuarios.model.Usuario;
import com.example.backusuarios.repository.IUsuarioRepository;

@Service
public class UsuarioService {

    @Autowired
    IUsuarioRepository iUsuarioRepository;

    public  List<Usuario> encontrarUsuarios(){
       return iUsuarioRepository.findAll();
    }

}
