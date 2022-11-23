package com.example.ej13.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ej13.model.Carniceria;
import com.example.ej13.service.CarniceriaService;

@RestController
@RequestMapping("/carniceria")
public class CarniceriaController {

    @Autowired
    CarniceriaService carniceriaService;

    @GetMapping("/buscar/{id}")
    public Carniceria buscarRegistro(@PathVariable Long id){
        return carniceriaService.encontrarPorID(id);
    }
    
    @DeleteMapping("/eliminar/{id}")
    public void eliminarRegistro(@PathVariable Long id){
        carniceriaService.eliminarPorID(id);
    }

    @PostMapping("/save")
    public Carniceria guardar(@RequestBody Carniceria carniceria){
       return carniceriaService.anhadir(carniceria);
    }

    @GetMapping("/buscar-nombre/{nombre}")
    public List<Carniceria> buscarRegistroNombre(@PathVariable String nombre){
        return carniceriaService.encontrarPorNombre(nombre);

    }

}
