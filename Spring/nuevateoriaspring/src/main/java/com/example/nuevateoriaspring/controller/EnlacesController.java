package com.example.nuevateoriaspring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/")
public class EnlacesController {

    @GetMapping
    public String vistaEnlaces(){
        return "vistaEnlaces";
    }
    
    @GetMapping ("/enlaces")
    public String enlaces(@RequestParam(name="nombre")String nombre, @RequestParam(name="edad") int edad) { //Le estamos pasando un parametro desde el html si ponemos que required=false no es obligatorio
        System.out.println(nombre);                                                                            //@RequesParam String nombre -> asume que el nombre parametro es igual a la variable
       System.out.println(edad);                                                                                //name=propiedad del requestParam -> si la variable se nombra igual que el name este se puede omitir (@RequestParam int edad)
        return "enlaces";
    }
    
}
