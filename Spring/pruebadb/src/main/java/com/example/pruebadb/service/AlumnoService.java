package com.example.pruebadb.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.pruebadb.model.Alumno;
import com.example.pruebadb.repository.IAlumnoRepository;

@Service
public class AlumnoService {
    
    @Autowired
    private IAlumnoRepository alumnoRepository;

    public List<Alumno> findAlumno(){

        return alumnoRepository.findAll();
    }

    public void deleteAlumno(Long id){
        alumnoRepository.deleteById(id);
    }

    public void saveAlumno(Alumno alumno){
        alumnoRepository.save(alumno);

    }

    public Alumno buscarAlumno(Long id){
        return alumnoRepository.findById(id).orElse(null);

    }
}
