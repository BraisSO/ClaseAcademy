package com.example.ej1.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/primer-controller")
public class PrimerController {
    
    @GetMapping("/primer-metodo")
    public String primerMetodo(){
        return "firstView";

    }

    @GetMapping("/segundo-metodo")
    public String segundoMetodo(){
        return "secondView";

    }
}
