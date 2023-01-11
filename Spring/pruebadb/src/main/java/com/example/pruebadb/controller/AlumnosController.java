package com.example.pruebadb.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import com.example.pruebadb.model.Alumno;
import com.example.pruebadb.service.AlumnoService;
import org.springframework.web.bind.annotation.PostMapping;  

@Controller
@RequestMapping("/alumno")
public class AlumnosController {

    @Autowired
    private AlumnoService alumnoService;

    @GetMapping("/list")
    public String list(Model model) {

        model.addAttribute("alumnos", alumnoService.findAlumno());
        return "alumnosView";

    }

    @GetMapping("/delete/{id}")
    public String delete(@PathVariable(name = "id") Long id) {
        alumnoService.deleteAlumno(id);

        return "redirect:/alumno/list";
    }

    @GetMapping("/form")
    public String form(Model model) {
        model.addAttribute("alumno", new Alumno());
        return "form";
    }

    @PostMapping("/save")
    public String save(Alumno alumno) {
        alumnoService.saveAlumno(alumno);
        return "redirect:/alumno/list";
    }

    @GetMapping("/search/{id}")
    public String findStudent(@PathVariable Long id, Model model) {
        model.addAttribute("alumno", alumnoService.buscarAlumno(id));

        return "form";

    }

}
