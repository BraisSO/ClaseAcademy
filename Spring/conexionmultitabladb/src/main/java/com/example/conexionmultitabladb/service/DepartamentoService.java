package com.example.conexionmultitabladb.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.conexionmultitabladb.model.Departamento;
import com.example.conexionmultitabladb.repository.IDepartamentoRepository;

@Service
public class DepartamentoService {
    @Autowired
    private IDepartamentoRepository iDepartamentoRepository;


    public List<Departamento> listaDespartamentos(){
        return iDepartamentoRepository.findAll();
    }
}
