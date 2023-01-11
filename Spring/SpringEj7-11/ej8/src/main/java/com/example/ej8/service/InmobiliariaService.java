package com.example.ej8.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ej8.model.Inmuebles;
import com.example.ej8.repository.IInmobiliariaRepository;

@Service
public class InmobiliariaService {

    @Autowired 
     private IInmobiliariaRepository inmobiliariaRepository;

     public void gardarInmueble(Inmuebles inmueble){
        inmobiliariaRepository.save(inmueble);
     }
    
}
