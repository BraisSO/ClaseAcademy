package com.example.examen1spring.service;

import java.lang.reflect.Method;

import org.springframework.stereotype.Service;

@Service
public class Examen1Service {

    public String pasarMaiuscula(String palabra){
        return palabra.toUpperCase();
    }
    
    public String pasarMinuscula(String palabra){
        return palabra.toLowerCase();
    }
}
