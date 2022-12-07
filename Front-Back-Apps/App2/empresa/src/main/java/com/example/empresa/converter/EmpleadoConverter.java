package com.example.empresa.converter;

import org.springframework.stereotype.Component;

import com.example.empresa.dto.EmpleadoDTO;
import com.example.empresa.model.Empleado;


@Component
public class EmpleadoConverter {

    public EmpleadoDTO convertEntityDTO(Empleado empleado){
       
        EmpleadoDTO empleadoDTO = new EmpleadoDTO();

        empleadoDTO.setId(empleado.getId());
        empleadoDTO.setNombre(empleado.getNombre());
        empleadoDTO.setApellidos(empleado.getApellidos());
        empleadoDTO.setDepartamento(empleado.getDepartamento().getNombreDepartamento());
        empleadoDTO.setDepartamentoId(empleado.getDepartamento().getId());
        
        return empleadoDTO;
    }
    
}
