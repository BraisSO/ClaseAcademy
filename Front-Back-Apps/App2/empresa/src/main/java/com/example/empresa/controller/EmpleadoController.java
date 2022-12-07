package com.example.empresa.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.empresa.dto.EmpleadoDTO;
import com.example.empresa.model.Empleado;
import com.example.empresa.service.EmpeladoService;

@RestController
@RequestMapping("/api/empleado")
@CrossOrigin({"*"})
public class EmpleadoController {
    @Autowired
    private EmpeladoService empeladoService;

    
    @PostMapping("/save") //http://localhost:8080/api/empleado/save
    public Empleado save(@RequestBody Empleado empleado){
        return empeladoService.guardarEmpleado(empleado);
    }

    @GetMapping("/list") //http://localhost:8080/api/empleado/list
    public List<Empleado>list(){
        return empeladoService.listaEmpleados();
    }

    @GetMapping("/list-dto") //http://localhost:8080/api/empleado/listDTO
    public List<EmpleadoDTO>listDTO(){
        return empeladoService.listaEmpleadosDTO();
    }

}
