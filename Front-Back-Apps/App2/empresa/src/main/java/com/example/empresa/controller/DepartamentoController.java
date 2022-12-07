package com.example.empresa.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.empresa.model.Departamento;
import com.example.empresa.service.DepartametoService;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin({"*"})
@RestController
@RequestMapping("/api/departamento")
public class DepartamentoController {

  @Autowired
  private DepartametoService departametoService;

  @GetMapping("/lista")   // http://localhost:8080/api/departamento/lista
  public List<Departamento> lista(){
    return departametoService.listaDepartamentos();
  }

  @PostMapping("/save") // http://localhost:8080/api/departamento/save
  public Departamento save (@RequestBody Departamento departamento){
    return departametoService.guardarDepartamento(departamento);
  }
  
}
