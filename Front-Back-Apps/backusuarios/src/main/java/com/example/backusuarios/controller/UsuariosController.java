package com.example.backusuarios.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backusuarios.model.Usuario;
import com.example.backusuarios.service.UsuarioService;

@CrossOrigin({"*"})
@RestController
@RequestMapping("/api")
public class UsuariosController {
    
    @Autowired
    UsuarioService usuarioService;


    @GetMapping("/usuarios")
    public List<Usuario> listarUsuarios(){
        return usuarioService.encontrarUsuarios();
    }
}
