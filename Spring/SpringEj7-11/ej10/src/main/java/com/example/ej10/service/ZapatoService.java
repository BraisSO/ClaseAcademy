package com.example.ej10.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ej10.model.Zapato;
import com.example.ej10.repository.IZapatoRepository;

@Service
public class ZapatoService {
    @Autowired
    IZapatoRepository iZapatoRepository;


    public Zapato buscarPorID(Long id){
        return  iZapatoRepository.findById(id).orElse(null);
    }

}
