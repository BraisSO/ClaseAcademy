package com.example.ej3.Controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import com.example.ej3.Service.Alumno;
import com.example.ej3.Service.Promedio;

@Controller
//@RequestMapping({"/","/alumnos","/alumnado"})
public class AlumnoController {
    
    @GetMapping("/alumnitos")
    public String añadirAlumnos(Model model){

        List<Alumno> alumnado= new ArrayList<>();
        alumnado.add(new Alumno(1,"Brais","Suárez","Miguéns",10));
        alumnado.add(new Alumno(2,"Martin","Martinez","Martinez",1));
        alumnado.add(new Alumno(3,"Estrella","Beatriz","Ticono",9));

        model.addAttribute("alumnado", alumnado);

        Promedio generadorPromedio= new Promedio();
        float promedio=generadorPromedio.generarPromedio(alumnado);

        
        model.addAttribute("promedio", promedio);

        return "alumnosView";

    }
}
