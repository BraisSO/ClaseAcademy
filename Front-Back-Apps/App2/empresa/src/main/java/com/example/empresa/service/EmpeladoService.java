package com.example.empresa.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.empresa.converter.EmpleadoConverter;
import com.example.empresa.dto.EmpleadoDTO;
import com.example.empresa.model.Empleado;
import com.example.empresa.repo.IEmpleadoRepo;

@Service
public class EmpeladoService {
    @Autowired
    private IEmpleadoRepo empleadoRepo;

    @Autowired
    private EmpleadoConverter empleadoConverter;

    public Empleado guardarEmpleado(Empleado empleado){
        return empleadoRepo.save(empleado);
    }

    public List<Empleado> listaEmpleados(){
        return empleadoRepo.findAll();
    }

    public List<EmpleadoDTO> listaEmpleadosDTO(){
        List<Empleado> empleados = empleadoRepo.findAll();
        List<EmpleadoDTO> empleadosDTO = new ArrayList<>();
        
        for (Empleado empleado : empleados) {
            empleadosDTO.add(empleadoConverter.convertEntityDTO(empleado));
        }

        return empleadosDTO;
    }
}
