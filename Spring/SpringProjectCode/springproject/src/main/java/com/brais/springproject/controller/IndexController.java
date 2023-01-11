package com.brais.springproject.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.brais.springproject.model.Alumno;

@Controller
public class IndexController {
    

    @GetMapping("/notas")
    public String ejemplo (Model model){


        List<Alumno> listaAlumnos= new ArrayList<>();
        listaAlumnos.add(new Alumno(1, "Brais"));
        listaAlumnos.add(new Alumno(1, "Jose"));

        
        

        String [] a={"pepe","josefa"};
        model.addAttribute("personaUno", Arrays.toString(a));
        model.addAttribute("personaDos", "Luis");
        model.addAttribute("alumnos", listaAlumnos);
        
        return "home";
    }

    
}
