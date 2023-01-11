package com.example.ej11.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ej11.model.Zapato;
import com.example.ej11.repository.IZapatoRepository;

@Service
public class ZapatoService {
    @Autowired
    IZapatoRepository iZapatoRepository;


    public Zapato buscarPorID(Long id){
        return  iZapatoRepository.findById(id).orElse(null);
    }

    public List<Zapato> buscarTodos(){
        return iZapatoRepository.findAll();
    }

}
