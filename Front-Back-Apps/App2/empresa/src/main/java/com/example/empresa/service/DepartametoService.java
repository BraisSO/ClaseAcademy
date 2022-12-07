package com.example.empresa.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.empresa.model.Departamento;
import com.example.empresa.repo.IDepartamentoRepo;

@Service
public class DepartametoService {

  @Autowired
  private IDepartamentoRepo departamentoRepo;

  public List<Departamento> listaDepartamentos(){
    return departamentoRepo.findAll();
  }

  public Departamento guardarDepartamento(Departamento departamento){
    return departamentoRepo.save(departamento);
  }
  
}
