package com.example.ej6.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ej6.model.Coche;
import com.example.ej6.repository.ICocheRepository;

@Service
public class CocheService {
    
    @Autowired
    private ICocheRepository cocheRepository;

    public void guardarCoche (Coche coche){
        cocheRepository.save(coche);
    }

    public List<Coche> encontrarCoches(){
        return cocheRepository.findAll();
        
    }
}
