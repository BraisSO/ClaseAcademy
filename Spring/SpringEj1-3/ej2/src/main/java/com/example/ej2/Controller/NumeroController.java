package com.example.ej2.Controller;

import java.security.Key;

import javax.swing.text.View;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import com.example.ej2.Service.Numero;

@Controller
@RequestMapping("/home")
public class NumeroController {

    @GetMapping("/aleatorio")
    public String numeroView(Model model){

        Numero aleatorio1= new Numero();
        model.addAttribute("aleatorio", aleatorio1.envioNumero());
        
        return "randomView";
    }
    
}
