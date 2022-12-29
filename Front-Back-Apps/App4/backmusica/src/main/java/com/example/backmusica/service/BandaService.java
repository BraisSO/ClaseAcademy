package com.example.backmusica.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backmusica.model.Banda;
import com.example.backmusica.repository.IBandaRepository;

@Service
public class BandaService {
    @Autowired 
    IBandaRepository bandaRepository;


    public List<Banda> buscarBandas(){
        return bandaRepository.findAll();
    } 

    public Banda guardarBandas(Banda banda){
        return bandaRepository.save(banda);
    }

    public List<Banda> buscarPorNombre(String nombre){
        return bandaRepository.findByNombre(nombre);
    }

    public void eliminarPorId(Long id){
        bandaRepository.deleteById(id);
    }

    public Banda buscarPorId(Long id){
        return bandaRepository.findById(id).orElse(null);
    }

}
