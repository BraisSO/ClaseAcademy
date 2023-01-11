package com.example.prueba.prueba.Controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/inicio")

    public String home(Model model) {
        Map<String,String> coleccion = new HashMap();
        coleccion.put("feo", "Brais");
        coleccion.put("tonto", "Martin");


        model.addAttribute("persona1", coleccion.get("feo"));
        model.addAttribute("persona2", coleccion.get("tonto"));

        model.addAttribute("mapa", coleccion);

        
        model.addAttribute("color","verde");

        return "index";
    }

}
