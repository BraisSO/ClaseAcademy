package com.example.conexionmultitabladb.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.conexionmultitabladb.model.Departamento;
import com.example.conexionmultitabladb.service.DepartamentoService;

@RestController
@RequestMapping("/api/departamento")
public class DepartamentoController {
    @Autowired
    private DepartamentoService departamentoService;

    @GetMapping("/list")
    public List<Departamento> list(){
        return departamentoService.listaDespartamentos();
    }
}
