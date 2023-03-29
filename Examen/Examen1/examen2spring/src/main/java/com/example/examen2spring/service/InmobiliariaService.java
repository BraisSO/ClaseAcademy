package com.example.examen2spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.examen2spring.model.Inmuebles;
import com.example.examen2spring.repository.IInmobiliariaRepository;

@Service
public class InmobiliariaService {
  
    @Autowired 
     private IInmobiliariaRepository inmobiliariaRepository;

     public List<Inmuebles> listarInmuebles(){
        return inmobiliariaRepository.findAll();
    
}

    public List<Inmuebles> encontrarPorLocalidad(String localidad){
        return inmobiliariaRepository.findByLocalidad(localidad);
    }

    public Inmuebles encontrarPorId (Long id){
        return inmobiliariaRepository.findById(id).orElse(null);
    }

}


