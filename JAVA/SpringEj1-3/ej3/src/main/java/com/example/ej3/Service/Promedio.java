package com.example.ej3.Service;

import java.util.ArrayList;
import java.util.List;

public class Promedio {

    public float generarPromedio(List<Alumno> alumnado){
        float promedio=0;
        float contador=0;
        for (Alumno alumno : alumnado) {
          promedio+=alumno.getNota();
          contador++;
        }
        
        return promedio/contador;
    }
}
