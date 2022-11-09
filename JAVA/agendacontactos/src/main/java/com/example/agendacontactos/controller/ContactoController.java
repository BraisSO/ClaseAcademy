package com.example.agendacontactos.controller;

import java.util.List;

import org.hibernate.query.criteria.internal.expression.ConcatExpression;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.StreamingHttpOutputMessage.Body;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.agendacontactos.model.Contacto;
import com.example.agendacontactos.service.ContactoService;

@CrossOrigin({"*"})
@RestController
@RequestMapping("/api/contacto")
public class ContactoController {
    @Autowired
    private ContactoService contactoService;

    @GetMapping("/lista")  //localhost:8080/api/contacto/lista
    public List<Contacto> lista(){
        return contactoService.listarContactos();
    }


    @GetMapping("/{id}") //localhost:8080/api/contacto/1
    public Contacto buscar(@PathVariable Long id){
        return contactoService.buscarContacto(id);
    }

     @PostMapping("/save")
     public Contacto guardar(@RequestBody Contacto contacto){
        return contactoService.guardarContacto(contacto);
     }

     @PutMapping("/{id}")
     public Contacto modificar(@PathVariable Long id, @RequestBody Contacto contacto){
        Contacto contactoEncontrado= contactoService.buscarContacto(id);
        contactoEncontrado.setNombre(contacto.getNombre());
        contactoEncontrado.setApellidoUno(contacto.getApellidoUno());
        contactoEncontrado.setApellidoDos(contacto.getApellidoDos());
        contactoEncontrado.setTelefono(contacto.getTelefono());

       return contactoService.guardarContacto(contactoEncontrado);
     }

     @DeleteMapping("/{id}")
     public void eliminar(@PathVariable Long id){
        contactoService.eliminarContacto(id);
     }
}
