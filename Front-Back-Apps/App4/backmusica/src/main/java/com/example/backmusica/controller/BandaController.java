package com.example.backmusica.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backmusica.model.Banda;
import com.example.backmusica.service.BandaService;

@CrossOrigin({"*"})
@RestController
@RequestMapping("/api")
public class BandaController {
    @Autowired
    BandaService bandaService;

    @GetMapping("/listar-bandas") //http://localhost:8080/api/listar-bandas
    public List<Banda> listarBandas(){
        return bandaService.buscarBandas();
    }

    @PostMapping("/guardar-banda") //http://localhost:8080/api/guardar-banda
    public Banda guardarBanda(@RequestBody Banda banda){
        return bandaService.guardarBandas(banda);
    }

    @GetMapping("/nombre/{nombre}")//http://localhost:8080/api/nombre/{nombre}
        public List<Banda> buscarPorNombre(@PathVariable String nombre){
            return bandaService.buscarPorNombre(nombre);
        }
    
    }

    


