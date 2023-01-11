package com.example.ej12.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ej12.model.Carniceria;
import com.example.ej12.repository.ICarniceriaRepository;

@Service
public class CarniceriaService {
    
    @Autowired 
    ICarniceriaRepository iCarniceriaRepository;

    public Carniceria encontrarPorID(Long id){
        return iCarniceriaRepository.findById(id).orElse(null);

    }

    public void eliminarPorID(Long id){
         iCarniceriaRepository.deleteById(id);
    }

    public Carniceria anhadir(Carniceria carniceria){
        return iCarniceriaRepository.save(carniceria);
    }

}
